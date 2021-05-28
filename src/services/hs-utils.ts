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
