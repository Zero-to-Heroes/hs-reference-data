import { GameFormatString } from '../enums/game-format';
import { ReferenceCard } from '../models/reference-cards/reference-card';
import { GameFormat } from '../public-api';
import { AllCardsService } from './all-cards.service';

export const formatFormat = (format: GameFormat): GameFormatString => {
	switch (format) {
		case GameFormat.FT_STANDARD:
			return 'standard';
		case GameFormat.FT_CLASSIC:
			return 'classic';
		case GameFormat.FT_WILD:
		default:
			return 'wild';
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
