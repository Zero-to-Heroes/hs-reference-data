import { Sideboard } from '@firestone-hs/deckstrings';
import { CardIds } from '../card-ids';
import { ReferenceCard } from '../models/reference-cards/reference-card';
import { GameFormat } from '../public-api';
import { CardsForDeckbuildingService } from './cards-for-deckbuilding.service';
import { httpWithRetries } from './utils';

const CARDS_CDN_URL = 'https://static.firestoneapp.com/data/cards';

export class AllCardsService {
	private cache: { [cardId: string]: ReferenceCard } = {};
	private cacheDbfId: { [cardDbfId: string]: ReferenceCard } = {};

	private deckbuilding: CardsForDeckbuildingService;

	constructor() {
		// We don't call it in the constructor because we want the app to be in control
		// of how they load the cards, and for it to be aware of when cards have been loaded
		// this.retrieveAllCards();
	}

	// We keep this synchronous because we ensure, in the game init pipeline, that loading cards
	// is the first thing we do
	public getCard(id: string | number, errorWhenUndefined = true): ReferenceCard {
		return this.cache[id] ?? this.cacheDbfId[id] ?? ({} as ReferenceCard);
	}

	public getMultipleCards(ids: (string | number)[]): ReferenceCard[] {
		return ids.map((id) => this.getCard(id));
	}

	/** @deprecated use getCard instead */
	public getCardFromDbfId(dbfId: number): ReferenceCard {
		return this.cacheDbfId[dbfId] ?? ({} as ReferenceCard);
	}

	/** @deprecated use getMultipleCards instead */
	public getCardsFromDbfIds(dbfIds: number[]): ReferenceCard[] {
		return dbfIds.map((dbfId) => this.getCardFromDbfId(dbfId));
	}

	public getCards(): ReferenceCard[] {
		return Object.values(this.cache);
	}

	public async initializeCardsDb(version = '', cardsFile = 'cards_enUS.gz.json', useLocal = false): Promise<void> {
		// console.debug('[all-cards] asked to retrieve cards from CDN', version, new Error().stack);
		return new Promise<void>(async (resolve, reject) => {
			let allCards: readonly ReferenceCard[] = Object.values(this.cache);
			if (!!allCards?.length) {
				// console.debug('[all-cards] already loaded all cards');
				resolve();
				return;
			}

			this.cache = {};
			this.cacheDbfId = {};
			const baseUrl = useLocal ? '.' : CARDS_CDN_URL;
			version = useLocal ? `${version}${Math.random()}` : version;
			allCards = await loadCards(baseUrl, cardsFile, version);
			if (!allCards?.length) {
				console.error('[all-cards] could not load cards', baseUrl, version, allCards);
			} else {
				// console.log('[all-cards] retrieved all cards', allCards?.length);
				for (const card of allCards) {
					if (card.id) {
						this.cache[card.id] = card;
					}
					if (card.dbfId) {
						this.cacheDbfId[card.dbfId] = card;
					}
				}
			}

			this.deckbuilding = new CardsForDeckbuildingService();
			this.deckbuilding.init(this);
			resolve();
		});
	}

	public getRootCardId(cardId: string): string {
		const dbfId = this.getCard(cardId)?.deckDuplicateDbfId ?? this.getCard(cardId)?.dbfId;
		return this.getCard(dbfId)?.id;
	}

	public normalizeDeckList(decklist: string): string {
		return this.deckbuilding.normalizeDeckList(decklist, this);
	}

	public normalizeSideboard(sideboard: Sideboard, format: GameFormat): Sideboard {
		return this.deckbuilding.normalizeSideboard(sideboard, format, this);
	}

	public getBaseCardDbfIdForDeckbuilding(cardIdOrDbfId: number | string, format: GameFormat): number {
		return this.deckbuilding.getBaseCardDbfIdForDeckbuilding(cardIdOrDbfId, format, this);
	}

	public getBaseCardIdForDeckbuilding(cardIdOrDbfId: number | string, format: GameFormat): string {
		return this.deckbuilding.getBaseCardIdForDeckbuilding(cardIdOrDbfId, format, this);
	}
}

const loadCards = async (baseUrl: string, cardsFile: string, version: string): Promise<readonly ReferenceCard[]> => {
	const versionString = !!version?.length ? `?v=${version}` : '';
	const url = `${baseUrl}/${cardsFile}${versionString}`;
	let cardsStr: string = await httpWithRetries(url, 1);
	if (!!cardsStr?.length && !cardsStr.startsWith('<')) {
		return JSON.parse(cardsStr) as readonly ReferenceCard[];
	}

	console.warn('[all-cards] could not load cards, defaulting to split');
	const numberOfSplits = 4;
	const result: ReferenceCard[] = [];
	for (let i = 0; i < numberOfSplits; i++) {
		const splitUrl = `${baseUrl}/split/${cardsFile}.${i}${versionString}`;
		console.log('[all-cards] loading split', splitUrl);
		cardsStr = await httpWithRetries(splitUrl, 1);
		if (!!cardsStr?.length && !cardsStr.startsWith('<')) {
			const splitCards: readonly ReferenceCard[] = JSON.parse(cardsStr);
			console.log('loaded split cards', splitCards?.length);
			result.push(...splitCards);
		}
	}
	if (!!result?.length) {
		return result;
	}

	const urlNoAudio = `${baseUrl}/no_audio/${cardsFile}?v=${version}`;
	console.warn('[all-cards] could not load cards, defaulting to no_audio', urlNoAudio);
	cardsStr = await httpWithRetries(urlNoAudio, 1);
	if (!!cardsStr?.length && !cardsStr.startsWith('<')) {
		return JSON.parse(cardsStr) as readonly ReferenceCard[];
	}
	return [];
};

// The spellstones are present in the AI decklist in their basic version
// However, if the AI plays the spellstone's upgraded version, we need to remove
// the basic one from the decklist
export const getBaseCardId = (cardId: string): string => {
	if (!cardId) {
		return null;
	}

	switch (cardId) {
		// The spellstones
		case 'LOOT_103t1':
		case 'LOOT_103t2':
			return 'LOOT_103';
		case 'LOOT_043t2':
		case 'LOOT_043t3':
			return 'LOOT_043';
		case 'LOOT_051t1':
		case 'LOOT_051t2':
			return 'LOOT_051';
		case 'LOOT_064t1':
		case 'LOOT_064t2':
			return 'LOOT_064';
		case 'LOOT_080t2':
		case 'LOOT_080t3':
			return 'LOOT_080';
		case 'LOOT_091t1':
		case 'LOOT_091t2':
			return 'LOOT_091';
		case 'LOOT_203t2':
		case 'LOOT_203t3':
			return 'LOOT_203';
		case 'LOOT_503t':
		case 'LOOT_503t2':
			return 'LOOT_503';
		case 'LOOT_507t':
		case 'LOOT_507t2':
			return 'LOOT_507';
		case 'FB_Champs_LOOT_080t2':
		case 'FB_Champs_LOOT_080t3':
			return 'FB_Champs_LOOT_080';
		// case CardIds.SpinelSpellstone_:
		// case CardIds.GreaterSpinelSpellstone_:
		// 	return CardIds.LesserSpinelSpellstone_;
		// case CardIds.LesserJasperSpellstone_JasperSpellstoneTokenCore:
		// case CardIds.LesserJasperSpellstone_GreaterJasperSpellstoneTokenCore:
		// 	return CardIds.LesserJasperSpellstoneCore;
		// case CardIds.LesserEmeraldSpellstone_EmeraldSpellstoneTokenCore:
		// case CardIds.LesserEmeraldSpellstone_GreaterJaspEmeraldSpellstoneTokenCore:
		// 	return CardIds.LesserEmeraldSpellstoneCore;
		// case CardIds.LesserDiamondSpellstone_DiamondSpellstoneTokenCore:
		// case CardIds.LesserDiamondSpellstone_GreaterDiamondSpellstoneTokenCore:
		// 	return CardIds.LesserDiamondSpellstoneCore;
		// case CardIds.LesserAmethystSpellstone_AmethystSpellstoneTokenCore:
		// case CardIds.LesserAmethystSpellstone_GreaterAmethystSpellstoneTokenCore:
		// 	return CardIds.LesserAmethystSpellstoneCore;

		// The "unidentified" spells
		case 'LOOT_278t1':
			return 'LOOT_278';
		case 'LOOT_278t2':
			return 'LOOT_278';
		case 'LOOT_278t3':
			return 'LOOT_278';
		case 'LOOT_278t4':
			return 'LOOT_278';
		case 'LOOT_285t':
			return 'LOOT_285';
		case 'LOOT_285t2':
			return 'LOOT_285';
		case 'LOOT_285t3':
			return 'LOOT_285';
		case 'LOOT_285t4':
			return 'LOOT_285';
		case 'LOOT_286t1':
			return 'LOOT_286';
		case 'LOOT_286t2':
			return 'LOOT_286';
		case 'LOOT_286t3':
			return 'LOOT_286';
		case 'LOOT_286t4':
			return 'LOOT_286';
		case 'DAL_366t1':
			return 'DAL_366';
		case 'DAL_366t2':
			return 'DAL_366';
		case 'DAL_366t3':
			return 'DAL_366';
		case 'DAL_366t4':
			return 'DAL_366';
		// Galakrond
		case CardIds.GalakrondTheTempest_GalakrondTheApocalypseToken:
		case CardIds.GalakrondTheTempest_GalakrondAzerothsEndToken:
			return CardIds.GalakrondTheTempest;
		case CardIds.GalakrondTheWretched_GalakrondTheApocalypseToken:
		case CardIds.GalakrondTheWretched_GalakrondAzerothsEndToken:
			return CardIds.GalakrondTheWretched;
		case CardIds.GalakrondTheUnspeakable_GalakrondTheApocalypseToken:
		case CardIds.GalakrondTheUnspeakable_GalakrondAzerothsEndToken:
			return CardIds.GalakrondTheUnspeakable;
		case CardIds.GalakrondTheNightmare_GalakrondTheApocalypseToken:
		case CardIds.GalakrondTheNightmare_GalakrondAzerothsEndToken:
			return CardIds.GalakrondTheNightmare;
		case CardIds.GalakrondTheUnbreakable_GalakrondTheApocalypseToken:
		case CardIds.GalakrondTheUnbreakable_GalakrondAzerothsEndToken:
			return CardIds.GalakrondTheUnbreakable;
		// Corrupted
		case 'DMF_054t':
			return 'DMF_054';
		case 'DMF_061t':
			return 'DMF_061';
		case 'DMF_064t':
			return 'DMF_064';
		case 'DMF_073t':
			return 'DMF_073';
		case 'DMF_078t':
			return 'DMF_078';
		case 'DMF_080t':
			return 'DMF_080';
		case 'DMF_082t':
			return 'DMF_082';
		case 'DMF_083t':
			return 'DMF_083';
		case 'DMF_090t':
			return 'DMF_090';
		case 'DMF_101t':
			return 'DMF_101';
		case 'DMF_105t':
			return 'DMF_105';
		case 'DMF_117t':
			return 'DMF_117';
		case 'DMF_117t2':
			return 'DMF_117';
		case 'DMF_118t':
			return 'DMF_118';
		case 'DMF_124t':
			return 'DMF_124';
		case 'DMF_163t':
			return 'DMF_163';
		case 'DMF_174t':
			return 'DMF_174';
		case 'DMF_184t':
			return 'DMF_184';
		case 'DMF_186a':
			return 'DMF_186';
		case 'DMF_244t':
			return 'DMF_244';
		case 'DMF_247t':
			return 'DMF_247';
		case 'DMF_248t':
			return 'DMF_248';
		case 'DMF_517a':
			return 'DMF_517';
		case 'DMF_526a':
			return 'DMF_526';
		case 'DMF_701t':
			return 'DMF_701';
		case 'DMF_703t':
			return 'DMF_703';
		case 'DMF_730t':
			return 'DMF_730';
		case 'DMF_526a':
			return 'DMF_526';
		case CardIds.DreamingDrake_DreamingDrakeToken:
			return CardIds.DreamingDrake;
		case CardIds.LibramOfJudgment_LibramOfJudgmentToken:
			return CardIds.LibramOfJudgment;
		case CardIds.LuckysoulHoarder_LuckysoulHoarderToken:
			return CardIds.LuckysoulHoarder;
		case CardIds.NitroboostPoison_NitroboostPoisonToken:
			return CardIds.NitroboostPoison;
		// The "improve during run" cards in Duels
		// Upgradable ranked spells
		case CardIds.TameBeastRank1_TameBeastRank2Token:
		case CardIds.TameBeastRank1_TameBeastRank3Token:
			return CardIds.TameBeastRank1;
		case CardIds.ChainLightningRank1_ChainLightningRank2Token:
		case CardIds.ChainLightningRank1_ChainLightningRank3Token:
			return CardIds.ChainLightningRank1;
		case CardIds.FlurryRank1_FlurryRank2Token:
		case CardIds.FlurryRank1_FlurryRank3Token:
			return CardIds.FlurryRank1;
		case CardIds.CondemnRank1_CondemnRank2Token:
		case CardIds.CondemnRank1_CondemnRank3Token:
			return CardIds.CondemnRank1;
		case CardIds.WickedStabRank1_WickedStabRank2Token:
		case CardIds.WickedStabRank1_WickedStabRank3Token:
			return CardIds.WickedStabRank1;
		case CardIds.LivingSeedRank1_LivingSeedRank2Token:
		case CardIds.LivingSeedRank1_LivingSeedRank3Token:
			return CardIds.LivingSeedRank1;
		case CardIds.ConvictionRank1_ConvictionRank2Token:
		case CardIds.ConvictionRank1_ConvictionRank3Token:
			return CardIds.ConvictionRank1;
		case CardIds.ConditioningRank1_ConditioningRank2Token:
		case CardIds.ConditioningRank1_ConditioningRank3Token:
			return CardIds.ConditioningRank1;
		case CardIds.FuryRank1_FuryRank2Token:
		case CardIds.FuryRank1_FuryRank3Token:
			return CardIds.FuryRank1;
		case CardIds.ImpSwarmRank1_ImpSwarmRank2Token:
		case CardIds.ImpSwarmRank1_ImpSwarmRank3Token:
			return CardIds.ImpSwarmRank1;

		// Infused
		case CardIds.MischievousImp_MischievousImpToken:
			return CardIds.MischievousImp;
		case CardIds.ImpKingRafaam_ImpKingRafaamToken:
			return CardIds.ImpKingRafaam_REV_789;
		case CardIds.StonebornAccuser_StonebornAccuserToken:
			return CardIds.StonebornAccuser;
		case CardIds.Murlocula_MurloculaToken:
			return CardIds.Murlocula;
		case CardIds.FamishedFool_FamishedFoolToken:
			return CardIds.FamishedFool;
		case CardIds.SinfueledGolem_SinfueledGolemToken:
			return CardIds.SinfueledGolem;
		case CardIds.InsatiableDevourer_InsatiableDevourerToken:
			return CardIds.InsatiableDevourer;
		case CardIds.SireDenathrius_SireDenathriusToken:
			return CardIds.SireDenathrius_REV_906;
		case CardIds.PriestOfTheDeceased_PriestOfTheDeceasedToken:
			return CardIds.PriestOfTheDeceased;
		case CardIds.ArtificerXymox_ArtificerXymoxToken:
			return CardIds.ArtificerXymox_REV_937;
		case CardIds.BuffetBiggun_BuffetBiggunToken:
			return CardIds.BuffetBiggun;
		case CardIds.ImbuedAxe_ImbuedAxeToken:
			return CardIds.ImbuedAxe;
		case CardIds.CleanTheScene_CleanTheSceneToken:
			return CardIds.CleanTheScene;
		case CardIds.ConvincingDisguise_ConvincingDisguiseToken:
			return CardIds.ConvincingDisguise;
		case CardIds.PlotOfSin_PlotOfSinToken:
			return CardIds.PlotOfSin;
		case CardIds.AllFelBreaksLoose_AllFelBreaksLooseToken:
			return CardIds.AllFelBreaksLoose;
		case CardIds.Shadehound_ShadehoundToken:
			return CardIds.Shadehound;
		case CardIds.TotemicEvidence_TotemicEvidenceToken:
			return CardIds.TotemicEvidence;
		case CardIds.SylvanasTheAccused_SylvanasTheAccusedToken:
			return CardIds.SylvanasTheAccused;

		// Remixed
		case CardIds.RemixedDispenseOBot_ChillingDispenseOBotToken:
		case CardIds.RemixedDispenseOBot_MerchDispenseOBotToken:
		case CardIds.RemixedDispenseOBot_MoneyDispenseOBotToken:
		case CardIds.RemixedDispenseOBot_MysteryDispenseOBotToken:
			return CardIds.RemixedDispenseOBot;
		case CardIds.RemixedRhapsody_AngstyRhapsodyToken:
		case CardIds.RemixedRhapsody_ResoundingRhapsodyToken:
		case CardIds.RemixedRhapsody_EmotionalRhapsodyToken:
		case CardIds.RemixedRhapsody_WailingRhapsodyToken:
			return CardIds.RemixedRhapsody;
		case CardIds.RemixedTotemcarver_LoudTotemcarverToken:
		case CardIds.RemixedTotemcarver_BluesyTotemcarverToken:
		case CardIds.RemixedTotemcarver_BlazingTotemcarverToken:
		case CardIds.RemixedTotemcarver_KaraokeTotemcarverToken:
			return CardIds.RemixedTotemcarver;
		case CardIds.RemixedMusician_CathedralMusicianToken:
		case CardIds.RemixedMusician_TropicalMusicianToken:
		case CardIds.RemixedMusician_RomanticMusicianToken:
		case CardIds.RemixedMusician_NoiseMusicianToken:
			return CardIds.RemixedMusician;
		case CardIds.RemixedTuningFork_SharpenedTuningForkToken:
		case CardIds.RemixedTuningFork_ReinforcedTuningForkToken:
		case CardIds.RemixedTuningFork_CurvedTuningForkToken:
		case CardIds.RemixedTuningFork_BackupTuningForkToken:
			return CardIds.RemixedTuningFork;
		// Forged
		case CardIds.BellowingFlames_BellowingFlamesToken:
			return CardIds.BellowingFlames;
		case CardIds.ChampionOfStorms_StormCycloneToken_TTN_801t2:
			return CardIds.ChampionOfStorms_StormCycloneToken_TTN_801t1;
		case CardIds.CreationProtocol_CreationProtocolToken:
			return CardIds.CreationProtocol;
		case CardIds.DiscipleOfSargeras_DiscipleOfSargerasToken:
			return CardIds.DiscipleOfSargeras;
		case CardIds.EmbraceOfNature_EmbraceOfNatureToken:
			return CardIds.EmbraceOfNature;
		case CardIds.Eulogizer_EulogizerToken:
			return CardIds.Eulogizer;
		case CardIds.LabConstructor_LabConstructorToken:
			return CardIds.LabConstructor;
		case CardIds.MechagnomeGuide_MechagnomeGuideToken:
			return CardIds.MechagnomeGuide;
		case CardIds.MoltenRune_MoltenRuneToken:
			return CardIds.MoltenRune;
		case CardIds.StormGiant_StormGiantToken:
			return CardIds.StormGiant;
		case CardIds.TitanforgedTraps_TitanforgedTrapsToken:
			return CardIds.TitanforgedTraps;
		case CardIds.TyrsTears_TyrsTearsToken:
			return CardIds.TyrsTears;
		case CardIds.WatcherOfTheSun_WatcherOfTheSunToken:
			return CardIds.WatcherOfTheSun;
		case CardIds.WeightOfTheWorld_WeightOfTheWorldToken:
			return CardIds.WeightOfTheWorld;
		case CardIds.Xb488Disposalbot_Xb488DisposalbotToken:
			return CardIds.Xb488Disposalbot;
		case CardIds.MuscleOTron_MuscleOTronToken_YOG_525t:
			return CardIds.MuscleOTron_YOG_525;
		case CardIds.Sanitize_SanitizeToken_YOG_502t:
			return CardIds.Sanitize_YOG_502;
		// Bonus effect
		case CardIds.FromTheScrapheap_SparkbotToken_TTN_719t:
		case CardIds.FromTheScrapheap_SparkbotToken_TTN_719t1:
		case CardIds.FromTheScrapheap_SparkbotToken_TTN_719t2:
		case CardIds.FromTheScrapheap_SparkbotToken_TTN_719t3:
		case CardIds.FromTheScrapheap_SparkbotToken_TTN_719t4:
		case CardIds.FromTheScrapheap_SparkbotToken_TTN_719t5:
		case CardIds.FromTheScrapheap_SparkbotToken_TTN_719t6:
		case CardIds.FromTheScrapheap_SparkbotToken_TTN_719t7:
			return CardIds.DroneDeconstructor;
		case CardIds.ElementalInspiration_PrimordialVortexToken_TTN_480t1:
		case CardIds.ElementalInspiration_PrimordialVortexToken_TTN_480t2:
		case CardIds.ElementalInspiration_PrimordialVortexToken_TTN_480t3:
		case CardIds.ElementalInspiration_PrimordialVortexToken_TTN_480t4:
		case CardIds.ElementalInspiration_PrimordialVortexToken_TTN_480t5:
		case CardIds.ElementalInspiration_PrimordialVortexToken_TTN_480t6:
		case CardIds.ElementalInspiration_PrimordialVortexToken_TTN_480t7:
			return CardIds.ElementalInspiration_PrimordialVortexToken_TTN_480t;
		// Transforms in hand
		case CardIds.ForestSeedlings_ForestBlossomsToken:
			return CardIds.ForestSeedlings;
		case CardIds.FrostLotusSeedling_FrostLotusBlossomToken:
			return CardIds.FrostLotusSeedling;
	}

	// Transfer Student should be handled on a case by case basis
	if (cardId.startsWith(CardIds.TransferStudent)) {
		return CardIds.TransferStudent;
	}

	return cardId;
};
