import { CardIds } from 'src/card-ids';
import { ReferenceCard } from 'src/public-api';

const PIRANHA_TOKENS = [
	CardIds.PiranhaSwarmer_PiranhaSwarmerToken1,
	CardIds.PiranhaSwarmer_PiranhaSwarmerToken2,
	CardIds.PiranhaSwarmer_PiranhaSwarmerToken3,
	CardIds.PiranhaSwarmer_PiranhaSwarmerToken4,
];

export type RelatedCardExtractor = (cards: readonly ReferenceCard[]) => readonly string[];

export const RELATED_CARDS_DATA: {
	[cardId: string]: readonly (string | RelatedCardExtractor)[];
} = {
	[CardIds.AbyssalWave]: [CardIds.SirakessCultist_AbyssalCurseToken],
	[CardIds.AzsharanDefector]: [CardIds.AzsharanDefector_SunkenDefectorToken],
	[CardIds.AzsharanGardens]: [CardIds.AzsharanGardens_SunkenGardensToken],
	[CardIds.AzsharanMooncatcher]: [CardIds.AzsharanMooncatcher_SunkenMooncatcherToken],
	[CardIds.AzsharanRitual]: [CardIds.AzsharanRitual_SunkenRitualToken],
	[CardIds.AzsharanSaber]: [CardIds.AzsharanSaber_SunkenSaberToken],
	[CardIds.AzsharanScavenger]: [CardIds.AzsharanScavenger_SunkenScavengerToken],
	[CardIds.AzsharanScroll]: [CardIds.AzsharanScroll_SunkenScrollToken],
	[CardIds.AzsharanSentinel]: [CardIds.AzsharanSentinel_SunkenSentinelToken],
	[CardIds.AzsharanSweeper]: [CardIds.AzsharanSweeper_SunkenSweeperToken],
	[CardIds.AzsharanTrident]: [CardIds.AzsharanTrident_SunkenTridentToken],
	[CardIds.AzsharanVessel]: [
		CardIds.AzsharanVessel_SunkenVesselToken,
		CardIds.AzsharanVessel_AzsharanPirateToken,
		CardIds.AzsharanVessel_SunkenPirateToken,
	],
	[CardIds.BlackscaleBrute]: [CardIds.BlackscaleBrute_FirescaleBerserkerToken],
	[CardIds.BlackwaterBehemoth]: [CardIds.BlackwaterBehemoth_BehemothsLureToken],
	[CardIds.BloodInTheWater]: [CardIds.BloodInTheWater_TigerSharkToken],
	[CardIds.Colaque]: [CardIds.Colaque_ColaquesShellToken],
	[CardIds.CoralKeeper]: [CardIds.CoralKeeper_CoralElementalToken],
	[CardIds.Crabatoa]: [
		CardIds.Crabatoa_CrabatoasClawToken1,
		CardIds.Crabatoa_CrabatoasClawToken2,
		CardIds.Crabatoa_CrabatoaClawToken,
	],
	[CardIds.DraggedBelow]: [CardIds.SirakessCultist_AbyssalCurseToken],
	[CardIds.FlipperFriends]: [CardIds.FlipperFriends_OrcaToken, CardIds.FlipperFriends_OtterToken],
	[CardIds.GaiaTheTechtonic]: [CardIds.GaiaTheTechtonic_GaiasDrillToken1, CardIds.GaiaTheTechtonic_GaiasDrillToken2],
	[CardIds.Gigafin]: [CardIds.Gigafin_GigafinsMawToken],
	[CardIds.GluggTheGulper]: [
		CardIds.GluggTheGulper_GluggsTailToken1,
		CardIds.GluggTheGulper_GluggsTailToken2,
		CardIds.GluggTheGulper_GluggsTailToken3,
	],
	[CardIds.Hydralodon]: [CardIds.Hydralodon_HydralodonHeadToken1, CardIds.Hydralodon_HydralodonHeadToken2],
	[CardIds.ImmortalizedInStone]: [
		CardIds.ImmortalizedInStone_LivingStatueToken,
		CardIds.ImmortalizedInStone_PristineStatueToken,
		CardIds.ImmortalizedInStone_WornStatueToken,
	],
	[CardIds.NagasPride]: [CardIds.NagasPride_LionfishToken],
	[CardIds.NellieTheGreatThresher]: [CardIds.NellieTheGreatThresher_NelliesPirateShipToken],
	[CardIds.PiranhaPoacher]: PIRANHA_TOKENS,
	[CardIds.PirateAdmiralHooktusk]: [
		CardIds.PirateAdmiralHooktusk_TakeTheirGoldToken,
		CardIds.PirateAdmiralHooktusk_TakeTheirShipToken,
		CardIds.PirateAdmiralHooktusk_TakeTheirSuppliesToken,
	],
	[CardIds.QueenAzshara2]: [
		CardIds.RingOfTides,
		CardIds.HornOfAncients,
		CardIds.Xalatath,
		CardIds.TidestoneOfGolganneth,
	],
	[CardIds.Reefwalker]: PIRANHA_TOKENS,
	[CardIds.Schooling]: PIRANHA_TOKENS,
	[CardIds.SchoolTeacher]: [CardIds.SchoolTeacher_NagalingToken],
	[CardIds.SeascoutOperator]: [CardIds.SeascoutOperator_MechafishToken],
	[CardIds.SirakessCultist]: [CardIds.SirakessCultist_AbyssalCurseToken],
	[CardIds.TheLeviathan]: [CardIds.TheLeviathan_TheLeviathansClawToken],
	[CardIds.XhilagOfTheAbyss]: [
		CardIds.XhilagOfTheAbyss_XhilagsStalkToken1,
		CardIds.XhilagOfTheAbyss_XhilagsStalkToken2,
		CardIds.XhilagOfTheAbyss_XhilagsStalkToken3,
		CardIds.XhilagOfTheAbyss_XhilagsStalkToken4,
	],
	[CardIds.YseraLegacy]: [
		CardIds.DreamLegacy,
		CardIds.EmeraldDrakeLegacy,
		CardIds.LaughingSisterLegacy,
		CardIds.NightmareLegacy,
		CardIds.YseraAwakensLegacy,
	],
	[CardIds.YseraVanilla]: [
		CardIds.DreamVanilla,
		CardIds.EmeraldDrakeVanilla,
		CardIds.LaughingSisterVanilla,
		CardIds.NightmareVanilla,
		CardIds.YseraAwakensVanilla,
	],
	[CardIds.Zaqul]: [CardIds.SirakessCultist_AbyssalCurseToken],
};
