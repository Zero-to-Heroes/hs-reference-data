export interface ReferenceSet {
	readonly id: string;
	readonly name: string;
	readonly launchDate: Date;
}

export const sets: readonly ReferenceSet[] = [
	{
		id: 'titans',
		name: `TITANS`,
		launchDate: new Date('2023-06-27'),
	},
	{
		id: 'audiopocalypse',
		name: `Audiopocalypse`,
		launchDate: new Date('2023-05-31'),
	},
	{
		id: 'battle_of_the_bands',
		name: `Battle of the Bands`,
		launchDate: new Date('2023-03-15'),
	},
	{
		id: 'return_to_naxxramas',
		name: `Return to Naxxramas`,
		launchDate: new Date('2023-02-14'),
	},
	{
		id: 'path_of_arthas',
		name: `Path of Arthas`,
		launchDate: new Date('2022-11-01'),
	},
	{
		id: 'return_of_the_lich_king',
		name: `March of the Lich King`,
		launchDate: new Date('2022-11-01'),
	},
	{
		id: 'maw_and_disorder',
		name: `Maw and Disorder`,
		launchDate: new Date('2022-09-27'),
	},
	{
		id: 'revendreth',
		name: `Murder at Castle Nathria`,
		launchDate: new Date('2022-08-02'),
	},
	{
		id: 'throne_of_tides',
		name: `Throne of the Tides`,
		launchDate: new Date('2022-06-01'),
	},
	{
		id: 'the_sunken_city',
		name: `The Sunken City`,
		launchDate: new Date('2022-03-17'),
	},
	{
		id: 'onyxias_lair',
		name: `Onyxia's Lair`,
		launchDate: new Date('2022-02-15'),
	},
	{
		id: 'alterac_valley',
		name: 'Fractured in Alterac Valley',
		launchDate: new Date('2021-12-07'),
	},
	{
		id: 'deadmines',
		name: 'Deadmines',
		launchDate: new Date('2021-11-02'),
	},
	{
		id: 'stormwind',
		name: 'United in Stormwind',
		launchDate: new Date('2021-07-01'),
	},
	{
		id: 'wailing_caverns',
		name: 'Wailing Caverns',
		launchDate: new Date('2021-06-03'),
	},
	{
		id: 'the_barrens',
		name: 'Forged in the Barrens',
		launchDate: new Date('2021-03-15'),
	},
	{
		id: 'darkmoon_races',
		name: 'Darkmoon Races',
		launchDate: new Date('2021-01-21'),
	},
	{
		id: 'darkmoon_faire',
		name: 'Darkmoon Faire',
		launchDate: new Date('2020-11-17'),
	},
	{
		id: 'scholomance',
		name: 'Scholomance Academy',
		launchDate: new Date('2020-08-06'),
	},
	{
		id: 'black_temple',
		name: 'Ashes of Outland',
		launchDate: new Date('2020-04-07'),
	},
	{
		id: 'demon_hunter_initiate',
		name: 'Demon Hunter Initiate',
		launchDate: new Date('2020-04-02'),
	},
	{
		id: 'yod',
		name: "Galakrond's Awakening",
		launchDate: new Date('2020-01-21'),
	},
	{
		id: 'dragons',
		name: 'Descent of Dragons',
		launchDate: new Date('2019-12-10'),
	},
	{
		id: 'uldum',
		name: 'Saviors of Uldum',
		launchDate: new Date('2019-08-06'),
	},
	{
		id: 'dalaran',
		name: 'Rise of Shadows',
		launchDate: new Date('2019-04-09'),
	},
	{
		id: 'troll',
		name: "Rastakhan's Rumble",
		launchDate: new Date('2018-12-04'),
	},
	{
		id: 'boomsday',
		name: 'The Boomsday Project',
		launchDate: new Date('2018-08-07'),
	},
	{
		id: 'gilneas',
		name: 'The Witchwood',
		launchDate: new Date('2018-04-12'),
	},
	{
		id: 'lootapalooza',
		name: 'Kobolds and Catacombs',
		launchDate: new Date('2017-12-07'),
	},
	{
		id: 'icecrown',
		name: 'Knights of the Frozen Throne',
		launchDate: new Date('2017-08-10'),
	},
	{
		id: 'ungoro',
		name: "Journey to Un'Goro",
		launchDate: new Date('2017-04-06'),
	},
	// {
	// 	id: 'hof',
	// 	name: 'Hall of Fame',
	// 	launchDate: new Date('2017-04-04'),
	// },
	{
		id: 'gangs',
		name: 'Mean Streets of Gadgetzan',
		launchDate: new Date('2016-12-1'),
	},
	{
		id: 'kara',
		name: 'One Night in Karazhan',
		launchDate: new Date('2016-08-11'),
	},
	{
		id: 'og',
		name: 'Whispers of the Old Gods',
		launchDate: new Date('2016-04-26'),
	},
	{
		id: 'loe',
		name: 'League of Explorers',
		launchDate: new Date('2015-11-12'),
	},
	{
		id: 'tgt',
		name: 'The Grand Tournament',
		launchDate: new Date('2015-08-24'),
	},
	{
		id: 'brm',
		name: 'Blackrock Mountain',
		launchDate: new Date('2015-04-02'),
	},
	{
		id: 'gvg',
		name: 'Goblins vs Gnomes',
		launchDate: new Date('2014-12-08'),
	},
	{
		id: 'naxx',
		name: 'Naxxramas',
		launchDate: new Date('2014-07-22'),
	},
	{
		id: 'core',
		name: 'Core',
		launchDate: new Date('2021-03-25'),
	},
	// {
	// 	id: 'expert1',
	// 	name: 'Expert',
	// 	launchDate: new Date('2014-03-11'),
	// },
	// {
	// 	id: 'basic',
	// 	name: 'Basic',
	// 	launchDate: new Date('2014-03-11'),
	// },
	{
		id: 'legacy',
		name: 'Legacy',
		launchDate: new Date('2021-03-30'),
	},
];

export const standardSets: readonly string[] = [
	'core',
	'the_sunken_city',
	'throne_of_tides',
	'revendreth',
	'maw_and_disorder',
	'return_of_the_lich_king',
	'path_of_arthas',
	'return_to_naxxramas',
	'battle_of_the_bands',
	'audiopocalypse',
	'titans',
];
export const twistSets: readonly string[] = [
	'core',
	'demon_hunter_initiate',
	'black_temple',
	'scholomance',
	'darkmoon_faire',
	'darkmoon_races',
	'the_barrens',
	'wailing_caverns',
	'stormwind',
	'deadmines',
	'alterac_valley',
	'onyxias_lair',
	'the_sunken_city',
	'throne_of_tides',
	'revendreth',
	'maw_and_disorder',
	'return_of_the_lich_king',
	'path_of_arthas',
	'return_to_naxxramas',
	'battle_of_the_bands',
	'audiopocalypse',
	'titans',
];
// https://hearthstone.fandom.com/wiki/Arena#Arena_Rotation
export const arenaSets: readonly string[] = [
	'core',
	'the_sunken_city',
	'throne_of_tides',
	'revendreth',
	'maw_and_disorder',
	'return_of_the_lich_king',
	'return_to_naxxramas',
	'path_of_arthas',
	'battle_of_the_bands',
	'audiopocalypse',
	'titans',
];
export const wildSets: readonly string[] = sets.map((s) => s.id);
export const duelsSets: readonly string[] = [
	'core',
	'legacy',
	'naxx',
	'gvg',
	'loe',
	'og',
	'kara',
	'ungoro',
	'icecrown',
	'lootapalooza',
	'gilneas',
	'uldum',
	'scholomance',
	'demon_hunter_initiate',
	'darkmoon_faire',
	'darkmoon_races',
	'the_barrens',
	'wailing_caverns',
	'stormwind',
	'deadmines',
	'alterac_valley',
	'onyxias_lair',
	'the_sunken_city',
	'throne_of_tides',
	'revendreth',
	'maw_and_disorder',
	'return_of_the_lich_king',
	'return_to_naxxramas',
	'path_of_arthas',
	'battle_of_the_bands',
	'troll',
	'titans',
];

export const vanillaSets: readonly string[] = ['vanilla'];
