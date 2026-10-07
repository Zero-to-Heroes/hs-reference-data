import { CardIds } from '../../../card-ids';

/** Black Empire — static token and choice links. Parent to token only. */
const CTHUN_ABILITIES = [
	CardIds.CthunEyeOfTheEmpire_WrathOfCthunToken_BE_013t1,
	CardIds.CthunEyeOfTheEmpire_DomainOfCthunToken_BE_013t2,
	CardIds.CthunEyeOfTheEmpire_GlareOfCthunToken_BE_013t3,
	CardIds.CthunEyeOfTheEmpire_ServantsOfCthunToken_BE_013t4,
];

const NZOTH_ABILITIES = [
	CardIds.NzothDreamsEnd_CallOfNzothToken_BE_017t3,
	CardIds.NzothDreamsEnd_MasteryOfNzothToken_BE_017t4,
	CardIds.NzothDreamsEnd_ArmyOfNzothToken_BE_017t5,
	CardIds.NzothDreamsEnd_DomainOfNzothToken_BE_017t6,
];

const YOGG_ABILITIES = [
	CardIds.MastermindYoggSaron_BrainOfYoggSaronToken_BE_009t1,
	CardIds.MastermindYoggSaron_MadnessOfYoggSaronToken_BE_009t2,
	CardIds.MastermindYoggSaron_AscentOfYoggSaronToken_BE_009t3,
	CardIds.MastermindYoggSaron_DomainOfYoggSaronToken_BE_009t4,
];

const YSHAARJ_ABILITIES = [
	CardIds.YshaarjTitanBane_GazeOfYshaarjToken_BE_784t1,
	CardIds.YshaarjTitanBane_SpawnOfYshaarjToken_BE_784t2,
	CardIds.YshaarjTitanBane_MightOfYshaarjToken_BE_784t3,
	CardIds.YshaarjTitanBane_DomainOfYshaarjToken_BE_784t4,
];

const SINISTER_RITUALS = [
	CardIds.Kithix_RitualOfFamineToken_BE_090t1,
	CardIds.Kithix_RitualOfSubjugationToken_BE_090t2,
	CardIds.Kithix_RitualOfConquestToken_BE_090t3,
];

const LARVAE = [
	CardIds.BroodchamberTunneler_PaleLarvaToken_BE_720t1,
	CardIds.BroodchamberTunneler_BlueLarvaToken_BE_720t2,
	CardIds.BroodchamberTunneler_BlackLarvaToken_BE_720t3,
	CardIds.BroodchamberTunneler_YellowLarvaToken_BE_720t4,
	CardIds.BroodchamberTunneler_GreenLarvaToken_BE_720t5,
	CardIds.BroodchamberTunneler_BrownLarvaToken_BE_720t6,
	CardIds.BroodchamberTunneler_PurpleLarvaToken_BE_720t7,
	CardIds.BroodchamberTunneler_CyanLarvaToken_BE_720t8,
	CardIds.BroodchamberTunneler_RedLarvaToken_BE_720t9,
	CardIds.BroodchamberTunneler_NeonLarvaToken_BE_720t10,
	CardIds.BroodchamberTunneler_DarkLarvaToken_BE_720t11,
	CardIds.BroodchamberTunneler_TealLarvaToken_BE_720t12,
];

const BASIC_TOTEMS = [
	CardIds.HealingTotemLegacy,
	CardIds.SearingTotemLegacy,
	CardIds.StoneclawTotemLegacy,
	CardIds.WrathOfAirTotemLegacy,
];

const WATER_ELEMENTALS = [CardIds.WaterElemental_CORE_CS2_033, CardIds.WaterElementalLegacy];

const TOME_FORMS = [
	CardIds.TomeTranslator_TomeTranslatorToken_BE_327t,
	CardIds.TomeTranslator_TomeTranslatorToken_BE_327t1,
	CardIds.TomeTranslator_TomeTranslatorToken_BE_327t2,
	CardIds.TomeTranslator_TomeTranslatorToken_BE_327t3,
];

export const BLACK_EMPIRE_RELATED_CARDS = {
	[CardIds.CthunEyeOfTheEmpire_BE_013]: CTHUN_ABILITIES,
	[CardIds.CthunEyeOfTheEmpire_ServantsOfCthunToken_BE_013t4]: [
		CardIds.CthunEyeOfTheEmpire_FacelessFanaticToken_BE_013t5,
	],
	[CardIds.GargantuanSlitherer_BE_204]: CTHUN_ABILITIES,
	[CardIds.SpawnOfCthun_BE_014]: CTHUN_ABILITIES,
	[CardIds.WatchOver_BE_778]: CTHUN_ABILITIES,
	[CardIds.RitualOfCthun_BE_726]: CTHUN_ABILITIES,
	[CardIds.DarkDeacon_BE_012]: CTHUN_ABILITIES,
	[CardIds.TentacleLash_BE_771]: CTHUN_ABILITIES,
	[CardIds.NzothDreamsEnd_BE_017]: NZOTH_ABILITIES,
	[CardIds.MastermindYoggSaron_BE_009]: YOGG_ABILITIES,
	[CardIds.YshaarjTitanBane_BE_784]: YSHAARJ_ABILITIES,
	[CardIds.Kithix_BE_090]: SINISTER_RITUALS,
	[CardIds.Sundancer_BE_152]: [CardIds.Sundancer_SunsBlessingToken_BE_152t],
	[CardIds.Deathblossom_BE_802]: [CardIds.Deathblossom_CarnivorousPlantToken_BE_802t],
	[CardIds.Flamespitter_BE_552]: [CardIds.Tinker_OverdriveToken_BE_553t],
	[CardIds.Tinker_BE_553]: [CardIds.Tinker_OverdriveToken_BE_553t],
	[CardIds.Eyemaul_BE_349]: [CardIds.Eyemaul_TremoringElementalToken_BE_349t],
	[CardIds.ForgeOfOrigination_BE_561]: [CardIds.ForgeOfOrigination_SteelGolemToken_BE_561t],
	[CardIds.MarchToWar_BE_142]: [CardIds.MarchToWar_VanirSoldierToken_BE_142t],
	[CardIds.OathbindersAura_BE_146]: [CardIds.MarchToWar_VanirSoldierToken_BE_142t],
	[CardIds.IcebeltMagi_BE_270]: WATER_ELEMENTALS,
	[CardIds.ClockworkBoars_BE_730]: [CardIds.ClockworkBoars_ClockworkBoarToken_BE_730t],
	[CardIds.SigilOfHatching_BE_873]: [CardIds.SigilOfHatching_ShredclawToken_BE_873t],
	[CardIds.Encircle_BE_265]: [CardIds.SigilOfHatching_ShredclawToken_BE_873t],
	[CardIds.RitualOfSummoning_BE_085]: [CardIds.RitualOfSummoning_CthraxBruteToken_BE_085t],
	[CardIds.SunsReckoning_BE_153]: [CardIds.SunsReckoning_FinalReckoningToken_BE_153t],
	[CardIds.DarkestDepths_BE_087]: [CardIds.DarkestDepths_DepthguardToken_BE_087t],
	[CardIds.BroodchamberTunneler_BE_720]: LARVAE,
	[CardIds.AqirSwarmer_BE_722]: LARVAE,
	[CardIds.Incubate_BE_724]: LARVAE,
	[CardIds.BroodchamberTunneler_BlueLarvaToken_BE_720t2]: BASIC_TOTEMS,
	[CardIds.BroodchamberTunneler_YellowLarvaToken_BE_720t4]: [CardIds.SilverHandRecruitLegacyToken],
	[CardIds.BroodchamberTunneler_DarkLarvaToken_BE_720t11]: [CardIds.GhoulCharge_FrailGhoulLegacyToken],
	[CardIds.BroodchamberTunneler_BlackLarvaToken_BE_720t3]: [CardIds.WickedKnifeLegacy],
	[CardIds.Rajh_BE_004]: [CardIds.Rajh_SunsRadiance_BE_004p],
	[CardIds.Archaedas_BE_055]: [CardIds.Archaedas_HammerOfArchaedasToken_BE_055t],
	[CardIds.ElderWordManifest_BE_222]: [CardIds.ElderWordManifest_VoidwingToken_BE_222t],
	[CardIds.DiscsOfNorgannon_BE_250]: [
		CardIds.DiscsOfNorgannon_LeaveTheDiscsToken_BE_250t,
		CardIds.DiscsOfNorgannon_ShiftTheDiscsToken_BE_250t2,
	],
	[CardIds.TomeTranslator_BE_327]: TOME_FORMS,
};
