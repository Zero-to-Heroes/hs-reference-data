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
	CardIds.TheCoin_AV_COIN1,
	CardIds.TheCoin_AV_COIN2,
	CardIds.TheCoin_BAR_COIN1,
	CardIds.TheCoin_BAR_COIN2,
	CardIds.TheCoin_BAR_COIN3,
	CardIds.TheCoin_BT_COIN,
	CardIds.TheCoin_DAL_COIN,
	CardIds.TheCoin_DMF_COIN1,
	CardIds.TheCoin_DMF_COIN2,
	CardIds.TheCoin_DRG_COIN,
	CardIds.TheCoin_SW_COIN1,
	CardIds.TheCoin_SW_COIN2,
	CardIds.TheCoin_TSC_COIN1,
	CardIds.TheCoin_TSC_COIN2,
	CardIds.TheCoin_ULD_COIN,
	CardIds.TheCoin_REV_COIN1,
	CardIds.TheCoin_REV_COIN2,
];

export const WATCH_POST_IDS = [CardIds.FarWatchPost, CardIds.MorshanWatchPost, CardIds.CrossroadsWatchPost];

export const LIBRAM_IDS = [
	CardIds.LibramOfJustice_BT_011,
	CardIds.LibramOfJustice_Story_04_LibramofJustice,
	CardIds.LibramOfHope,
	CardIds.LibramOfWisdom_BT_025,
	CardIds.LibramOfWisdom_Story_01_LibramofWisdom,
	CardIds.LibramOfJudgment,
	CardIds.LibramOfJudgment_LibramOfJudgmentToken,
	CardIds.LibramOfHoliness,
	CardIds.LibramOfCompassion,
];
