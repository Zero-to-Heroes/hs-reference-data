import { CardIds } from '../card-ids';
import { ReferenceCard } from '../models/reference-cards/reference-card';
import { http } from './utils';

const CARDS_CDN_URL = 'https://static.zerotoheroes.com/hearthstone/jsoncards/cards.json?v=0';

export class AllCardsService {
	private allCards: ReferenceCard[];
	private cache: any = {};

	constructor() {
		// We don't call it in the constructor because we want the app to be in control
		// of how they load the cards, and for it to be aware of when cards have been loaded
		// this.retrieveAllCards();
	}

	// We keep this synchronous because we ensure, in the game init pipeline, that loading cards
	// is the first thing we do
	public getCard(id: string, errorWhenUndefined = true): ReferenceCard {
		if (this.cache[id]) {
			return this.cache[id];
		}
		if (!this.allCards) {
			// console.debug('getCard', 'cards not initialized yet', id);
			return {} as ReferenceCard;
		}
		const candidates = this.allCards.filter((card) => card.id === id);
		if (errorWhenUndefined && (!candidates || candidates.length === 0)) {
			console.debug('Could not find card for id', id, new Error().stack);
			return {} as ReferenceCard;
		}
		if (candidates.length === 1) {
			this.cache[id] = candidates[0];
		}
		return candidates[0];
	}

	public getCardFromDbfId(dbfId: number): ReferenceCard {
		if (!this.allCards) {
			// console.debug('getCardFromDbfId', 'cards not initialized yet', dbfId);
			return {} as ReferenceCard;
		}
		return this.allCards.find((card) => card.dbfId === +dbfId);
	}

	public getCardsFromDbfIds(dbfIds: number[]): ReferenceCard[] {
		if (!this.allCards) {
			// console.debug('getCardsFromDbfIds', 'cards not initialized yet', dbfIds);
			return [];
		}
		return this.allCards.filter((card) => dbfIds.indexOf(card.dbfId) !== -1);
	}

	public getCards(): ReferenceCard[] {
		return this.allCards;
	}

	public async initializeCardsDb(version = ''): Promise<void> {
		return new Promise<void>(async (resolve, reject) => {
			if (this.allCards) {
				// console.debug('[all-cards] already loaded all cards');
				resolve();
				return;
			}
			this.cache = {};
			// console.debug('[all-cards] retrieving cards from CDN');
			const cardsStr: string = await http(CARDS_CDN_URL + version);
			if (!cardsStr || cardsStr.length === 0 || cardsStr.startsWith('<')) {
				console.error('[all-cards] could not load cards', CARDS_CDN_URL + version, cardsStr);
				this.allCards = [];
			} else {
				// console.debug('[all-cards] retrieved all cards');
				this.allCards = JSON.parse(cardsStr);
			}
			for (const card of this.allCards) {
				if (card.id) {
					this.cache[card.id] = card;
				}
			}
			resolve();
		});
	}
}

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
		case CardIds.NonCollectible.Shaman.GalakrondTheTempest_GalakrondTheApocalypseToken:
		case CardIds.NonCollectible.Shaman.GalakrondTheTempest_GalakrondAzerothsEndToken:
			return CardIds.Collectible.Shaman.GalakrondTheTempest;
		case CardIds.NonCollectible.Warlock.GalakrondTheWretched_GalakrondTheApocalypseToken:
		case CardIds.NonCollectible.Warlock.GalakrondTheWretched_GalakrondAzerothsEndToken:
			return CardIds.Collectible.Warlock.GalakrondTheWretched;
		case CardIds.NonCollectible.Priest.GalakrondTheUnspeakable_GalakrondTheApocalypseToken:
		case CardIds.NonCollectible.Priest.GalakrondTheUnspeakable_GalakrondAzerothsEndToken:
			return CardIds.Collectible.Priest.GalakrondTheUnspeakable;
		case CardIds.NonCollectible.Rogue.GalakrondTheNightmare_GalakrondTheApocalypseToken:
		case CardIds.NonCollectible.Rogue.GalakrondTheNightmare_GalakrondAzerothsEndToken:
			return CardIds.Collectible.Rogue.GalakrondTheNightmare;
		case CardIds.NonCollectible.Warrior.GalakrondTheUnbreakable_GalakrondTheApocalypseToken:
		case CardIds.NonCollectible.Warrior.GalakrondTheUnbreakable_GalakrondAzerothsEndToken:
			return CardIds.Collectible.Warrior.GalakrondTheUnbreakable;
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
		case CardIds.NonCollectible.Druid.DreamingDrake_DreamingDrakeToken:
			return CardIds.Collectible.Druid.DreamingDrake;
		case CardIds.NonCollectible.Paladin.LibramOfJudgment_LibramOfJudgmentToken:
			return CardIds.Collectible.Paladin.LibramOfJudgment;
		case CardIds.NonCollectible.Neutral.LuckysoulHoarder_LuckysoulHoarderToken:
			return CardIds.Collectible.Neutral.LuckysoulHoarder;
		case CardIds.NonCollectible.Neutral.NitroboostPoison_NitroboostPoisonToken:
			return CardIds.Collectible.Neutral.NitroboostPoison;
		// The "improve during run" cards in Duels
		// Upgradable ranked spells
		case CardIds.NonCollectible.Hunter.TameBeastRank1_TameBeastRank2Token:
		case CardIds.NonCollectible.Hunter.TameBeastRank1_TameBeastRank3Token:
			return CardIds.Collectible.Hunter.TameBeastRank1;
		case CardIds.NonCollectible.Shaman.ChainLightningRank1_ChainLightningRank2Token:
		case CardIds.NonCollectible.Shaman.ChainLightningRank1_ChainLightningRank3Token:
			return CardIds.Collectible.Shaman.ChainLightningRank1;
		case CardIds.NonCollectible.Mage.FlurryRank1_FlurryRank2Token:
		case CardIds.NonCollectible.Mage.FlurryRank1_FlurryRank3Token:
			return CardIds.Collectible.Mage.FlurryRank1;
		case CardIds.NonCollectible.Priest.CondemnRank1_CondemnRank2Token:
		case CardIds.NonCollectible.Priest.CondemnRank1_CondemnRank3Token:
			return CardIds.Collectible.Priest.CondemnRank1;
		case CardIds.NonCollectible.Rogue.WickedStabRank1_WickedStabRank2Token:
		case CardIds.NonCollectible.Rogue.WickedStabRank1_WickedStabRank3Token:
			return CardIds.Collectible.Rogue.WickedStabRank1;
		case CardIds.NonCollectible.Druid.LivingSeedRank1_LivingSeedRank2Token:
		case CardIds.NonCollectible.Druid.LivingSeedRank1_LivingSeedRank3Token:
			return CardIds.Collectible.Druid.LivingSeedRank1;
		case CardIds.NonCollectible.Paladin.ConvictionRank1_ConvictionRank2Token:
		case CardIds.NonCollectible.Paladin.ConvictionRank1_ConvictionRank3Token:
			return CardIds.Collectible.Paladin.ConvictionRank1;
		case CardIds.NonCollectible.Warrior.ConditioningRank1_ConditioningRank2Token:
		case CardIds.NonCollectible.Warrior.ConditioningRank1_ConditioningRank3Token:
			return CardIds.Collectible.Warrior.ConditioningRank1;
		case CardIds.NonCollectible.Demonhunter.FuryRank1_FuryRank2Token:
		case CardIds.NonCollectible.Demonhunter.FuryRank1_FuryRank3Token:
			return CardIds.Collectible.Demonhunter.FuryRank1;
		case CardIds.NonCollectible.Warlock.ImpSwarmRank1_ImpSwarmRank2Token:
		case CardIds.NonCollectible.Warlock.ImpSwarmRank1_ImpSwarmRank3Token:
			return CardIds.Collectible.Warlock.ImpSwarmRank1;

		// Transfer Student should be handled on a case by case basis
	}

	if (cardId.startsWith(CardIds.Collectible.Neutral.TransferStudent)) {
		return CardIds.Collectible.Neutral.TransferStudent;
	}

	return cardId;
};