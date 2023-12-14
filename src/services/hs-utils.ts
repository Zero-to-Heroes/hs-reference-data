import { GameFormatString } from '../enums/game-format';
import { ReferenceCard } from '../models/reference-cards/reference-card';
import { GameFormat, GameType } from '../public-api';
import { AllCardsService } from './all-cards.service';

export const ALL_CLASSES = [
	'deathknight',
	'druid',
	'hunter',
	'mage',
	'paladin',
	'priest',
	'rogue',
	'shaman',
	'warlock',
	'warrior',
	'demonhunter',
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
