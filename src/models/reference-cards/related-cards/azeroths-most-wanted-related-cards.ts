import { CardIds } from '../../../card-ids';

const CANNONEER = CardIds.Cannonmaster_CannoneerToken_CAP_107t;
const IMP_FORMANT = CardIds.ImpFormantToken_CAP_400t2t;

const KAZAKUS_TRIAL_TOKENS = [
	CardIds.GodfatherKazakus_DetainedForDestructionToken_CAP_405t1,
	CardIds.GodfatherKazakus_ConvictedForConspiracyToken_CAP_405t2,
	CardIds.GodfatherKazakus_SentencedForSmugglingToken_CAP_405t3,
	CardIds.GodfatherKazakus_CrateOfContrabandToken_CAP_405t4,
	CardIds.GodfatherKazakus_SpuriousShivToken_CAP_405t5,
	CardIds.GodfatherKazakus_CriminalContractToken_CAP_405t6,
	CardIds.GodfatherKazakus_PotionOfPerjuryToken_CAP_405t7,
	CardIds.GodfatherKazakus_SwillOfSuggestibilityToken_CAP_405t8,
	CardIds.GodfatherKazakus_TonicOfTyrannyToken_CAP_405t9,
	CardIds.RushedTrial_RushedTrial_CAP_405tb1b,
	CardIds.GruelingTrial_GruelingTrial_CAP_405tb2b,
	CardIds.UnendingTrial_UnendingTrial_CAP_405tb3b,
];

/** 36.4 Azeroth’s Most Wanted (CAP_*) — static token / summon / choice links. */
export const AZEROTHS_MOST_WANTED_RELATED_CARDS = {
	[CardIds.FollowTheGhosts_CAP_802]: [CardIds.FollowTheGhosts_SpookyGhostToken_CAP_802t],
	[CardIds.SlimeEm_CAP_805]: [CardIds.SlimeEm_EctoplasmToken_CAP_805t],
	[CardIds.KabalConspirator_CAP_400]: [IMP_FORMANT],
	[CardIds.FollowTheEvidence_CAP_402]: [IMP_FORMANT],
	[CardIds.HarshSentence_CAP_404]: [IMP_FORMANT],
	[CardIds.KabalMastermind_CAP_406]: [IMP_FORMANT],
	[CardIds.CorruptConstable_CAP_401]: [IMP_FORMANT],
	[CardIds.GodfatherKazakus_CAP_405]: KAZAKUS_TRIAL_TOKENS,
	[CardIds.GodfatherKazakus_TonicOfTyrannyToken_CAP_405t9]: [
		CardIds.Voidlord_LOOT_368,
		CardIds.Voidlord_CORE_LOOT_368,
	],
	[CardIds.DisguisedOperator_CAP_004]: [
		CardIds.DisguisedOperator_Detected_CAP_004a,
		CardIds.DisguisedOperator_Disguised_CAP_004b,
	],
	[CardIds.LandHo_CAP_102]: [CANNONEER],
	[CardIds.HandCannon_CAP_103]: [CANNONEER],
	[CardIds.HookNHeave_CAP_105]: [CANNONEER],
	[CardIds.CaptainCrowley_CAP_106]: [CANNONEER],
	[CardIds.Cannonmaster_CAP_107]: [CANNONEER],
};
