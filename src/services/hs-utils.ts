import { CardIds } from '../card-ids';
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

export const COIN_IDS = [
	CardIds.TheCoinCore,
	CardIds.TheCoin1,
	CardIds.TheCoin2,
	CardIds.TheCoin3,
	CardIds.TheCoin4,
	CardIds.TheCoin5,
	CardIds.TheCoin6,
	CardIds.TheCoin7,
	CardIds.TheCoin8,
	CardIds.TheCoin9,
	CardIds.TheCoin10,
	CardIds.TheCoin11,
	CardIds.TheCoin12,
	CardIds.TheCoin13,
];

export const WATCH_POST_IDS = [CardIds.FarWatchPost, CardIds.MorshanWatchPost, CardIds.CrossroadsWatchPost];

export const LIBRAM_IDS = [
	CardIds.LibramOfJustice1,
	CardIds.LibramOfJustice2,
	CardIds.LibramOfHope,
	CardIds.LibramOfWisdom1,
	CardIds.LibramOfWisdom2,
	CardIds.LibramOfJudgment,
	CardIds.LibramOfJudgment_LibramOfJudgmentToken,
	CardIds.LibramOfHoliness,
	CardIds.LibramOfCompassion,
];
