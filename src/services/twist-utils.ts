import { CardIds } from '../card-ids';
import { ScenarioId } from '../enums/scenario-id';

export const bannedTwistCards = [
	CardIds.Glide,
	CardIds.RefreshingSpringWater,
	CardIds.CryptKeeper,
	CardIds.TheCavernsBelow,
];

export const isKnownTwistList = (scenarioId: number): boolean => {
	return [ScenarioId.TWIST___HEROIC_DECK___MONTH_1, ScenarioId.TWIST___HEROIC_DECK___MONTH_2].includes(scenarioId);
};

export const getWhizbangHeroesTemplateDeckId = (scenarioId: number, opponentCardId: string): number => {
	switch (opponentCardId) {
		case CardIds.KaelthasSunstrider_THD_015:
		case CardIds.KaelthasSunstrider_THD_043:
			return 660;
		case CardIds.AlakirTheWindlord_THD_026:
			return 661;
		case CardIds.ArchVillainRafaam_THD_032:
			return 649;
		case CardIds.BrannBronzebeard_THD_042:
			return 659;
		case CardIds.Cthun_THD_038:
			return 651;
		case CardIds.DrBoom_THD_034:
			return 650;
		case CardIds.ForestWardenOmu_THD_007:
			return 642;
		case CardIds.GuffRunetotem_THD_009:
		case CardIds.SpelunkerGuff_THD_008:
			return 655;
		case CardIds.IllidanStormrage_THD_004:
			return 656;
		case CardIds.KingKrush_THD_012:
			return 644;
		case CardIds.LeeroyJenkins_THD_019:
			return 645;
		case CardIds.Nozdormu_THD_020:
			return 663;
		case CardIds.NzothTheCorruptor_THD_039:
			return 652;
		case CardIds.PatchesThePirate_THD_025:
			return 648;
		case CardIds.SirFinleyMrrgglton_THD_044:
			return 653;
		case CardIds.TheLichKing_THD_001:
			return 654;
		case CardIds.Xyrella_THD_022:
			return 647;
		case CardIds.Zuljin_THD_010:
			return 643;
		case CardIds.Arfus_THD_100:
			return 665;
		case CardIds.MarinTheManager_THD_024:
			return 657;
		case CardIds.HearthbreakerHedanis_THD_104:
			return 664;
		case CardIds.LadyLiadrin_THD_108:
			return 673;
		case CardIds.Sargeras_THD_103:
			return 666;
		case CardIds.EliteTaurenChampion_THD_106:
			return 669;
		case CardIds.HalveriaDarkraven_THD_107:
			return 672;
		case CardIds.ThorimStormlord_THD_105:
			return 670;
		case CardIds.QueenAzshara_THD_017:
			return 662;
		case CardIds.Tamsin_THD_102:
			return 667;
		case CardIds.DariusCrowley_THD_033:
		case CardIds.DeathmantleValeera_THD_023:
		case CardIds.EliseStarseeker_THD_040:
		case CardIds.ExplorerDawngrasp_THD_013:
		case CardIds.GunslingerKurtrus_THD_005:
		case CardIds.HagathaTheWitch_THD_028:
		case CardIds.HalveriaDarkraven_THD_006:
		case CardIds.Kelthuzad_THD_016:
		case CardIds.Khadgar_THD_014:
		case CardIds.LordJaraxxus_THD_030:
		case CardIds.MindrenderIllucia_THD_021:
		case CardIds.NemsyNecrofizzle_THD_031:
		case CardIds.PitBossReska_THD_003:
		case CardIds.Ragnaros_THD_029:
		case CardIds.Rokara_THD_035:
		case CardIds.SireDenathrius_THD_036:
		case CardIds.SylvanasWindrunner_THD_011:
		case CardIds.TheHeadlessHorseman_THD_002:
		case CardIds.V07Tr0n_THD_018:
		case CardIds.VarianWrynn_THD_037:
		case CardIds.VenerableBrukan_THD_027:
		default:
			return 0;
	}
};
