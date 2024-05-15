import { GameFormatString } from '../enums/game-format';
import { ReferenceCard } from '../models/reference-cards/reference-card';
import { CardClass, CardIds, GameFormat, GameType, allDuelsHeroesExtended } from '../public-api';
import { AllCardsService } from './all-cards.service';

export const ALL_CLASSES = [
	'deathknight',
	'demonhunter',
	'druid',
	'hunter',
	'mage',
	'paladin',
	'priest',
	'rogue',
	'shaman',
	'warlock',
	'warrior',
];

export const formatFormat = (format: GameFormat): GameFormatString => {
	switch (format) {
		case GameFormat.FT_STANDARD:
			return 'standard';
		case GameFormat.FT_CLASSIC:
			return 'classic';
		case GameFormat.FT_TWIST:
			return 'twist';
		case GameFormat.FT_WILD:
		default:
			return 'wild';
	}
};
export const formatFormatReverse = (format: GameFormatString): GameFormat => {
	switch (format) {
		case 'standard':
			return GameFormat.FT_STANDARD;
		case 'classic':
			return GameFormat.FT_CLASSIC;
		case 'twist':
			return GameFormat.FT_TWIST;
		case 'wild':
		default:
			return GameFormat.FT_WILD;
	}
};

export const formatGameType = (gameType: GameType): string => {
	switch (gameType) {
		case GameType.GT_UNKNOWN:
			return 'unknown';
		case GameType.GT_VS_AI:
			return 'practice';
		case GameType.GT_VS_FRIEND:
			return 'friendly';
		case GameType.GT_TUTORIAL:
			return 'tutorial';
		case GameType.GT_ARENA:
			return 'arena';
		case GameType.GT_RANKED:
			return 'ranked';
		case GameType.GT_CASUAL:
			return 'casual';
		case GameType.GT_TAVERNBRAWL:
		case GameType.GT_TB_1P_VS_AI:
		case GameType.GT_TB_2P_COOP:
		case GameType.GT_FSG_BRAWL_VS_FRIEND:
		case GameType.GT_FSG_BRAWL:
		case GameType.GT_FSG_BRAWL_1P_VS_AI:
		case GameType.GT_FSG_BRAWL_2P_COOP:
			return 'tavern-brawl';
		case GameType.GT_BATTLEGROUNDS:
		case GameType.GT_BATTLEGROUNDS_FRIENDLY:
		case GameType.GT_BATTLEGROUNDS_AI_VS_AI:
		case GameType.GT_BATTLEGROUNDS_PLAYER_VS_AI:
			return 'battlegrounds';
		case GameType.GT_BATTLEGROUNDS_DUO:
		case GameType.GT_BATTLEGROUNDS_DUO_VS_AI:
		case GameType.GT_BATTLEGROUNDS_DUO_FRIENDLY:
		case GameType.GT_BATTLEGROUNDS_DUO_AI_VS_AI:
			return 'battlegrounds-duo';
		case GameType.GT_MERCENARIES_AI_VS_AI:
			return 'mercenaries-ai-vs-ai';
		case GameType.GT_MERCENARIES_FRIENDLY:
			return 'mercenaries-friendly';
		case GameType.GT_MERCENARIES_PVE:
			return 'mercenaries-pve';
		case GameType.GT_MERCENARIES_PVP:
			return 'mercenaries-pvp';
		case GameType.GT_MERCENARIES_PVE_COOP:
			return 'mercenaries-pve-coop';
		case GameType.GT_PVPDR:
			return 'duels';
		case GameType.GT_PVPDR_PAID:
			return 'paid-duels';
		default:
			console.warn('unsupported game type', gameType);
			return 'unknown';
	}
};

export const formatGameTypeReverse = (gameType: string): GameType => {
	switch (gameType) {
		case 'unknown':
			return GameType.GT_UNKNOWN;
		case 'practice':
			return GameType.GT_VS_AI;
		case 'friendly':
			return GameType.GT_VS_FRIEND;
		case 'tutorial':
			return GameType.GT_TUTORIAL;
		case 'arena':
			return GameType.GT_ARENA;
		case 'ranked':
			return GameType.GT_RANKED;
		case 'casual':
			return GameType.GT_CASUAL;
		case 'tavern-brawl':
			return GameType.GT_TAVERNBRAWL;
		case 'battlegrounds':
			return GameType.GT_BATTLEGROUNDS;
		case 'battlegrounds-duo':
			return GameType.GT_BATTLEGROUNDS_DUO;
		case 'mercenaries-ai-vs-ai':
			return GameType.GT_MERCENARIES_AI_VS_AI;
		case 'mercenaries-friendly':
			return GameType.GT_MERCENARIES_FRIENDLY;
		case 'mercenaries-pve':
			return GameType.GT_MERCENARIES_PVE;
		case 'mercenaries-pvp':
			return GameType.GT_MERCENARIES_PVP;
		case 'mercenaries-pve-coop':
			return GameType.GT_MERCENARIES_PVE_COOP;
		case 'duels':
			return GameType.GT_PVPDR;
		case 'paid-duels':
			return GameType.GT_PVPDR_PAID;
		default:
			console.warn('unsupported game type', gameType);
			return GameType.GT_UNKNOWN;
	}
};

export const getDefaultHeroDbfIdForClass = (playerClass: string): number => {
	switch (playerClass?.toLowerCase()) {
		case 'deathknight':
			return 78065;
		case 'demonhunter':
			return 56550;
		case 'druid':
			return 274;
		case 'hunter':
			return 31;
		case 'mage':
			return 637;
		case 'paladin':
			return 671;
		case 'priest':
			return 813;
		case 'rogue':
			return 930;
		case 'shaman':
			return 1066;
		case 'warlock':
			return 893;
		case 'warrior':
			return 7;
		default:
			console.warn('Could not normalize hero card id', playerClass);
			return 7;
	}
};

export const normalizeDeckHeroDbfId = (
	heroDbfId: number,
	cards: AllCardsService,
	duelsClass?: CardClass,
	// Should probably not be needed, but it's a safeguard in case we can't figure out the class from the Duels sign treasure
	deckClass?: CardClass,
): number => {
	const cardFromHeroDbfId = cards.getCardFromDbfId(heroDbfId);
	// Don't normalize the dual-class heroes
	switch (cardFromHeroDbfId.id) {
		// Sometimes a neutral hero is provided even though the deck has class cards
		case CardIds.VanndarStormpikeTavernBrawl:
			switch (duelsClass ?? deckClass) {
				case CardClass.DEMONHUNTER:
					return cards.getCard(CardIds.VanndarStormpike_VanndarStormpikeTavernBrawl_PVPDR_Hero_Vanndarv1)
						.dbfId;
				case CardClass.HUNTER:
					return cards.getCard(CardIds.VanndarStormpike_VanndarStormpikeTavernBrawl_PVPDR_Hero_Vanndarv2)
						.dbfId;
				case CardClass.PALADIN:
					return cards.getCard(CardIds.VanndarStormpike_VanndarStormpikeTavernBrawl_PVPDR_Hero_Vanndarv3)
						.dbfId;
				case CardClass.PRIEST:
					return cards.getCard(CardIds.VanndarStormpike_VanndarStormpikeTavernBrawl_PVPDR_Hero_Vanndarv4)
						.dbfId;
				case CardClass.ROGUE:
					return cards.getCard(CardIds.VanndarStormpike_VanndarStormpikeTavernBrawl_PVPDR_Hero_Vanndarv5)
						.dbfId;
			}
			break;
		case CardIds.DrektharTavernBrawl:
			switch (duelsClass ?? deckClass) {
				case CardClass.DRUID:
					return cards.getCard(CardIds.Drekthar_DrektharTavernBrawl_PVPDR_Hero_DrekTharv1).dbfId;
				case CardClass.MAGE:
					return cards.getCard(CardIds.Drekthar_DrektharTavernBrawl_PVPDR_Hero_DrekTharv2).dbfId;
				case CardClass.SHAMAN:
					return cards.getCard(CardIds.Drekthar_DrektharTavernBrawl_PVPDR_Hero_DrekTharv3).dbfId;
				case CardClass.WARLOCK:
					return cards.getCard(CardIds.Drekthar_DrektharTavernBrawl_PVPDR_Hero_DrekTharv4).dbfId;
				case CardClass.WARRIOR:
					return cards.getCard(CardIds.Drekthar_DrektharTavernBrawl_PVPDR_Hero_DrekTharv5).dbfId;
			}
			break;
	}

	// No need for further normalization, all heroes are supported in Duels
	if (duelsClass || allDuelsHeroesExtended.includes(cardFromHeroDbfId.id as CardIds)) {
		return heroDbfId;
	}

	const playerClass: CardClass = CardClass[cards.getCard(heroDbfId)?.playerClass?.toUpperCase()];
	// Not sure this should happen anymore now that all Duels heroes are supported
	if (!playerClass) {
		return heroDbfId;
	}

	// Used for all the skins
	switch (playerClass) {
		case CardClass.DEATHKNIGHT:
			return 78065;
		case CardClass.DEMONHUNTER:
			return 56550;
		case CardClass.DRUID:
			return 274;
		case CardClass.HUNTER:
			return 31;
		case CardClass.MAGE:
			return 637;
		case CardClass.PALADIN:
			return 671;
		case CardClass.PRIEST:
			return 813;
		case CardClass.ROGUE:
			return 930;
		case CardClass.SHAMAN:
			return 1066;
		case CardClass.WARLOCK:
			return 893;
		case CardClass.WARRIOR:
			return 7;
		default:
			// Keep the neutral heroes
			return heroDbfId;
	}
};

export const isBattlegroundsCard = (card: ReferenceCard): boolean => {
	return !!card.techLevel || !!card.battlegroundsNormalDbfId || !!card.battlegroundsPremiumDbfId;
};

export const getEffectiveTechLevel = (card: ReferenceCard, allCards: AllCardsService): number => {
	if (card.techLevel) {
		return card.techLevel;
	}

	if (card.battlegroundsNormalDbfId) {
		const normalCard = allCards.getCardFromDbfId(card.battlegroundsNormalDbfId);
		return normalCard.techLevel ?? 1;
	}

	if (card.battlegroundsPremiumDbfId) {
		const premiumCard = allCards.getCardFromDbfId(card.battlegroundsPremiumDbfId);
		return premiumCard.techLevel ?? 1;
	}

	return 1;
};
