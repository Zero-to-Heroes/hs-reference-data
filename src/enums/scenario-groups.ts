import { ScenarioId } from './scenario-id';

export const ARENAS = [
	ScenarioId._140_ARENA_SEASON,
	ScenarioId._144_ARENA_SEASON,
	ScenarioId._150_ARENA_SEASON,
	ScenarioId._154_ARENA_SEASON,
	ScenarioId._160_ARENA_SEASON,
	ScenarioId._164_ARENA_SEASON,
	ScenarioId._170_ARENA_SEASON,
	ScenarioId._174_ARENA_SEASON,
	ScenarioId._184_ARENA_SEASON,
	ScenarioId._190_ARENA_SEASON,
	ScenarioId._194_ARENA_SEASON,
	ScenarioId._200_ARENA_SEASON,
];

export const DALARAN_HEIST_ALL = [
	ScenarioId.DALA_BANK,
	ScenarioId.DALA_VIOLETHOLD,
	ScenarioId.DALA_STREETS,
	ScenarioId.DALA_UNDERBELLY,
	ScenarioId.DALA_CITADEL,
	ScenarioId.DALA_TAVERN,
	ScenarioId.DALA_BANK_HEROIC,
	ScenarioId.DALA_VIOLETHOLD_HEROIC,
	ScenarioId.DALA_STREETS_HEROIC,
	ScenarioId.DALA_UNDERBELLY_HEROIC,
	ScenarioId.DALA_CITADEL_HEROIC,
	ScenarioId.DALA_TAVERN_HEROIC,
];

export const TOMBS_OF_TERROR_ALL = [
	ScenarioId.ULDA_CITY,
	ScenarioId.ULDA_DESERT,
	ScenarioId.ULDA_TOMB,
	ScenarioId.ULDA_HALLS,
	ScenarioId.ULDA_SANCTUM,
	ScenarioId.ULDA_CITY_HEROIC,
	ScenarioId.ULDA_DESERT_HEROIC,
	ScenarioId.ULDA_TOMB_HEROIC,
	ScenarioId.ULDA_HALLS_HEROIC,
	ScenarioId.ULDA_SANCTUM_HEROIC,
	ScenarioId.ULDA_TAVERN,
	ScenarioId.ULDA_TAVERN_HEROIC,
];

export const GALAKROND_EXPLORER = [
	ScenarioId.DRGA_GOOD_1_1,
	ScenarioId.DRGA_GOOD_1_2,
	ScenarioId.DRGA_GOOD_1_3,
	ScenarioId.DRGA_GOOD_2_1,
	ScenarioId.DRGA_GOOD_2_2,
	ScenarioId.DRGA_GOOD_2_3,
	ScenarioId.DRGA_GOOD_3_1,
	ScenarioId.DRGA_GOOD_3_2,
	ScenarioId.DRGA_GOOD_3_3,
	ScenarioId.DRGA_GOOD_4_1,
	ScenarioId.DRGA_GOOD_4_2,
	ScenarioId.DRGA_GOOD_4_3,
	ScenarioId.DRGA_GOOD_1_1_H,
	ScenarioId.DRGA_GOOD_1_2_H,
	ScenarioId.DRGA_GOOD_1_3_H,
	ScenarioId.DRGA_GOOD_2_1_H,
	ScenarioId.DRGA_GOOD_2_2_H,
	ScenarioId.DRGA_GOOD_2_3_H,
	ScenarioId.DRGA_GOOD_3_1_H,
	ScenarioId.DRGA_GOOD_3_2_H,
	ScenarioId.DRGA_GOOD_3_3_H,
	ScenarioId.DRGA_GOOD_4_1_H,
	ScenarioId.DRGA_GOOD_4_2_H,
	ScenarioId.DRGA_GOOD_4_3_H,
];

export const GALAKROND_EVIL = [
	ScenarioId.DRGA_EVIL_1_1,
	ScenarioId.DRGA_EVIL_1_2,
	ScenarioId.DRGA_EVIL_1_3,
	ScenarioId.DRGA_EVIL_2_1,
	ScenarioId.DRGA_EVIL_2_2,
	ScenarioId.DRGA_EVIL_2_3,
	ScenarioId.DRGA_EVIL_3_1,
	ScenarioId.DRGA_EVIL_3_2,
	ScenarioId.DRGA_EVIL_3_3,
	ScenarioId.DRGA_EVIL_4_1,
	ScenarioId.DRGA_EVIL_4_2,
	ScenarioId.DRGA_EVIL_4_3,
	ScenarioId.DRGA_EVIL_1_1_H,
	ScenarioId.DRGA_EVIL_1_2_H,
	ScenarioId.DRGA_EVIL_1_3_H,
	ScenarioId.DRGA_EVIL_2_1_H,
	ScenarioId.DRGA_EVIL_2_2_H,
	ScenarioId.DRGA_EVIL_2_3_H,
	ScenarioId.DRGA_EVIL_3_1_H,
	ScenarioId.DRGA_EVIL_3_2_H,
	ScenarioId.DRGA_EVIL_3_3_H,
	ScenarioId.DRGA_EVIL_4_1_H,
	ScenarioId.DRGA_EVIL_4_2_H,
	ScenarioId.DRGA_EVIL_4_3_H,
];

export const GALAKROND_ALL = [...GALAKROND_EXPLORER, ...GALAKROND_EVIL];
export const PRACTICE_ALL = [
	ScenarioId.AIDECK___NORMAL_MAGE,
	ScenarioId.AIDECK___NORMAL_WARLOCK,
	ScenarioId.AIDECK___NORMAL_HUNTER,
	ScenarioId.AIDECK___NORMAL_ROGUE,
	ScenarioId.AIDECK___NORMAL_PRIEST,
	ScenarioId.AIDECK___NORMAL_WARRIOR,
	ScenarioId.AIDECK___EXPERT_MAGE,
	ScenarioId.AIDECK___NORMAL_DRUID,
	ScenarioId.AIDECK___NORMAL_PALADIN,
	ScenarioId.AIDECK___NORMAL_SHAMAN,
	ScenarioId.AIDECK___EXPERT_WARRIOR,
	ScenarioId.AIDECK___EXPERT_PRIEST,
	ScenarioId.AIDECK___EXPERT_WARLOCK,
	ScenarioId.AIDECK___EXPERT_DRUID,
	ScenarioId.AIDECK___EXPERT_ROGUE,
	ScenarioId.AIDECK___EXPERT_HUNTER,
	ScenarioId.AIDECK___EXPERT_PALADIN,
	ScenarioId.AIDECK___EXPERT_SHAMAN,
	ScenarioId.AIDECK___NORMAL_DEMON_HUNTER,
	ScenarioId.AIDECK___EXPERT_DEMON_HUNTER,
];

export const SCENARIO_WITHOUT_RESTART = [
	ScenarioId.LOOTA_DUNGEON,
	ScenarioId.GILA_DUNGEON,
	ScenarioId.GILA_61_HAGATHA,
	ScenarioId.TRLA_DUNGEON,
	...DALARAN_HEIST_ALL,
	...TOMBS_OF_TERROR_ALL,
];