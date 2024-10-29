import { CardIds } from '../../card-ids';
import { ReferenceCard } from './reference-card';

export const isCoin = (
	cardId: string | CardIds,
	allCards: { getCard: (cardId: string | number) => ReferenceCard },
): boolean => {
	return allCards.getCard(cardId)?.isCoin;
};

export const EXCAVATE_TREASURE_1_IDS = [
	CardIds.KoboldMiner_EscapingTroggToken_WW_001t4,
	CardIds.KoboldMiner_FoolsAzeriteToken_WW_001t3,
	CardIds.KoboldMiner_PouchOfCoinsToken_WW_001t18,
	CardIds.KoboldMiner_RockToken_WW_001t,
	CardIds.KoboldMiner_WaterSourceToken_WW_001t2,
	CardIds.HeartblossomToken_DEEP_999t1,
];
export const EXCAVATE_TREASURE_2_IDS = [
	CardIds.KoboldMiner_AzeriteChunkToken_WW_001t9,
	CardIds.KoboldMiner_CanaryToken_WW_001t7,
	CardIds.KoboldMiner_FallingStalactiteToken_WW_001t5,
	CardIds.KoboldMiner_GlowingGlyphToken_WW_001t8,
	CardIds.KoboldMiner_LivingStoneToken_WW_001t16,
	CardIds.DeepholmGeodeToken_DEEP_999t2,
];
export const EXCAVATE_TREASURE_3_IDS = [
	CardIds.KoboldMiner_AzeriteGemToken_WW_001t14,
	CardIds.KoboldMiner_CollapseToken_WW_001t12,
	CardIds.KoboldMiner_MotherlodeDrakeToken_WW_001t17,
	CardIds.KoboldMiner_OgrefistBoulderToken_WW_001t11,
	CardIds.KoboldMiner_SteelhideMoleToken_WW_001t13,
	CardIds.WorldPillarFragmentToken_DEEP_999t3,
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
	CardIds.LibramOfClarity_GDB_137,
	CardIds.LibramOfFaith_GDB_139,
	CardIds.LibramOfDivinity_GDB_138,
];

export const RELIC_IDS = [CardIds.RelicOfDimensions, CardIds.RelicOfExtinction, CardIds.RelicOfPhantasms];
