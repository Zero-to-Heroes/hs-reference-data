import { BoosterType } from '../public-api';

export const boosterIdToSetId = (boosterId: BoosterType): string => {
	switch (boosterId) {
		case BoosterType.MERCENARIES:
			return 'lettuce';
		case BoosterType.CLASSIC:
		case BoosterType.GOLDEN_CLASSIC_PACK:
			return 'expert1';
		case BoosterType.GOBLINS_VS_GNOMES:
			return 'gvg';
		case BoosterType.THE_GRAND_TOURNAMENT:
			return 'tgt';
		case BoosterType.OLD_GODS:
		case BoosterType.FIRST_PURCHASE_OLD:
			return 'og';
		case BoosterType.MEAN_STREETS:
			return 'gangs';
		case BoosterType.UNGORO:
			return 'ungoro';
		case BoosterType.FROZEN_THRONE:
			return 'icecrown';
		case BoosterType.KOBOLDS_AND_CATACOMBS:
			return 'lootapalooza';
		case BoosterType.WITCHWOOD:
			return 'gilneas';
		case BoosterType.THE_BOOMSDAY_PROJECT:
			return 'boomsday';
		case BoosterType.RASTAKHANS_RUMBLE:
			return 'troll';
		case BoosterType.DALARAN:
			return 'dalaran';
		case BoosterType.ULDUM:
			return 'uldum';
		case BoosterType.DRAGONS:
			return 'dragons';
		case BoosterType.BLACK_TEMPLE:
			return 'black_temple';
		case BoosterType.SCHOLOMANCE:
		case BoosterType.GOLDEN_SCHOLOMANCE:
			return 'scholomance';
		case BoosterType.DARKMOON_FAIRE:
		case BoosterType.GOLDEN_DARKMOON_FAIRE:
			return 'darkmoon_faire';
		case BoosterType.THE_BARRENS:
		case BoosterType.GOLDEN_THE_BARRENS:
			return 'the_barrens';
		case BoosterType.STORMWIND:
		case BoosterType.STORMWIND_GOLDEN:
			return 'stormwind';
		case BoosterType.ALTERAC_VALLEY:
		case BoosterType.ALTERAC_VALLEY_GOLDEN:
			return 'alterac_valley';
		case BoosterType.THE_SUNKEN_CITY:
		case BoosterType.GOLDEN_THE_SUNKEN_CITY:
			return 'the_sunken_city';
		case BoosterType.REVENDRETH:
		case BoosterType.GOLDEN_REVENDRETH:
			return 'revendreth';
		case BoosterType.RETURN_OF_THE_LICH_KING:
		case BoosterType.GOLDEN_RETURN_OF_THE_LICH_KING:
			return 'return_of_the_lich_king';
		case BoosterType.BATTLE_OF_THE_BANDS:
		case BoosterType.GOLDEN_BATTLE_OF_THE_BANDS:
			return 'battle_of_the_bands';
		case BoosterType.TITANS:
		case BoosterType.GOLDEN_TITANS:
			return 'titans';
		case BoosterType.CAVERNS_OF_TIME:
			return 'caverns_of_time';
		case BoosterType.WILD_WEST:
			return 'wild_west';
		case BoosterType.WILD_WEST2:
			return 'wild_west2';
		case BoosterType.WHIZBANGS_WORKSHOP:
			return 'whizbangs_workshop';
		case BoosterType.ISLAND_VACATION:
		case BoosterType.GOLDEN_ISLAND_VACATION:
			return 'perils_in_paradise';
		default:
			// console.warn('unsupported booster type', boosterId);
			return null;
	}
};

export const getDefaultBoosterIdForSetId = (setId: string): BoosterType => {
	switch (setId) {
		case 'expert1':
			return BoosterType.CLASSIC;
		case 'gvg':
			return BoosterType.GOBLINS_VS_GNOMES;
		case 'tgt':
			return BoosterType.THE_GRAND_TOURNAMENT;
		case 'og':
			return BoosterType.OLD_GODS;
		case 'gangs':
			return BoosterType.MEAN_STREETS;
		case 'ungoro':
			return BoosterType.UNGORO;
		case 'icecrown':
			return BoosterType.FROZEN_THRONE;
		case 'lootapalooza':
			return BoosterType.KOBOLDS_AND_CATACOMBS;
		case 'gilneas':
			return BoosterType.WITCHWOOD;
		case 'boomsday':
			return BoosterType.THE_BOOMSDAY_PROJECT;
		case 'troll':
		case 'rumble':
			return BoosterType.RASTAKHANS_RUMBLE;
		case 'dalaran':
			return BoosterType.DALARAN;
		case 'uldum':
			return BoosterType.ULDUM;
		case 'dragons':
			return BoosterType.DRAGONS;
		case 'black_temple':
			return BoosterType.BLACK_TEMPLE;
		case 'scholomance':
			return BoosterType.SCHOLOMANCE;
		case 'darkmoon_faire':
		case 'darkmoon_races':
			return BoosterType.DARKMOON_FAIRE;
		case 'the_barrens':
		case 'wailing_caverns':
			return BoosterType.THE_BARRENS;
		case 'stormwind':
		case 'deadmines':
			return BoosterType.STORMWIND;
		case 'alterac_valley':
		case 'onyxias_lair':
			return BoosterType.ALTERAC_VALLEY;
		case 'the_sunken_city':
		case 'throne_of_tides':
			return BoosterType.THE_SUNKEN_CITY;
		case 'revendreth':
		case 'maw_and_disorder':
			return BoosterType.REVENDRETH;
		case 'return_of_the_lich_king':
		case 'path_of_arthas':
			return BoosterType.RETURN_OF_THE_LICH_KING;
		case 'battle_of_the_bands':
			return BoosterType.BATTLE_OF_THE_BANDS;
		case 'titans':
			return BoosterType.TITANS;
		case 'caverns_of_time':
			return BoosterType.CAVERNS_OF_TIME;
		case 'whizbangs_workshop':
			return BoosterType.WHIZBANGS_WORKSHOP;
		default:
			console.warn('no default booster type for set id', setId);
			return null;
	}
};

export const boosterIdToBoosterName = (
	boosterId: BoosterType,
	i18n: { translateString: (input: string) => string },
): string => {
	let normalizedBoosterId = boosterId;
	switch (boosterId) {
		case BoosterType.FIRST_PURCHASE_OLD:
			normalizedBoosterId = BoosterType.OLD_GODS;
	}
	return i18n.translateString(`global.pack.${BoosterType[normalizedBoosterId]?.toLowerCase()?.replace(/_/g, '-')}`);
};
