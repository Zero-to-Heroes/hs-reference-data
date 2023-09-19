import { CardIds, GameType, Race, ReferenceCard } from '../public-api';

export const ALL_BG_RACES = [
	Race.BEAST,
	Race.DEMON,
	Race.DRAGON,
	Race.MECH,
	Race.MURLOC,
	Race.PIRATE,
	Race.ELEMENTAL,
	Race.QUILBOAR,
	Race.NAGA,
	Race.UNDEAD,
];

export const TOTAL_RACES_IN_GAME = 5;

export const NON_BUYABLE_MINION_IDS = [
	CardIds.Cuddlgam_TB_BaconShop_HP_033t_SKIN_A,
	CardIds.Cuddlgam_TB_BaconShop_HP_033t_SKIN_A_G,
	CardIds.AbominableAmalgam_TB_BaconShop_HP_033t_SKIN_D,
	CardIds.AbominableAmalgam_TB_BaconShop_HP_033t_SKIN_D_G,
	CardIds.BookEatingAmalgam_TB_BaconShop_HP_033t_SKIN_B,
	CardIds.BookEatingAmalgam_TB_BaconShop_HP_033t_SKIN_B_G,
	CardIds.ArgentBraggart_BG_SCH_149,
	CardIds.ArgentBraggart_TB_BaconUps_308,
	CardIds.AvatarOfNzoth_FishOfNzothToken,
	CardIds.FishOfNzoth,
	CardIds.CattlecarpOfNzoth_TB_BaconShop_HP_105t_SKIN_A,
	CardIds.CattlecarpOfNzoth_TB_BaconShop_HP_105t_SKIN_A_G,
	CardIds.SnakeTrap_SnakeLegacyToken,
	CardIds.SnakeTrap_SnakeVanillaToken,
	CardIds.ImprovedSnakeTrap_SnakeToken,
	CardIds.ElementEarth_StoneElementalToken,
	CardIds.BabyKrush_DevilsaurToken,
	CardIds.Devilsaur,
	// To remove once the cards list is properly updated
	CardIds.FriendOfAFriend_BG22_404,
	CardIds.FriendOfAFriend_BG22_404_G,
	CardIds.Onyxia_OnyxianWhelpToken,
	CardIds.MurlocWarleaderCore,
	CardIds.MurlocWarleaderVanilla,
	// 23.4, probably not needed since they are already tokens
	CardIds.Tentacular_OzumatsTentacleToken_BG23_HERO_201pt,
	CardIds.Tentacular_OzumatsTentacleToken_BG23_HERO_201pt2,
	CardIds.Tentacular_OzumatsTentacleToken_BG23_HERO_201pt3,
	CardIds.Tentacular_OzumatsTentacleToken_BG23_HERO_201pt4,
	CardIds.Tentacular_OzumatsTentacleToken_BG23_HERO_201pt5,
	CardIds.Tentacular_OzumatsTentacleToken_BG23_HERO_201pt6,
	// 24.0, same
	CardIds.EmperorCobraLegacy_BG_EX1_170,
	CardIds.EmperorCobraLegacy_BG_EX1_170_G,
	CardIds.EmperorCobraLegacy_EX1_170,
	CardIds.SnakeLegacyToken,
	CardIds.SnakeLegacy,
	CardIds.ElementEarth_StoneElementalToken,
	CardIds.BolvarFireblood_CORE_ICC_858,
	CardIds.BolvarFireblood_ICC_858,
	// 25.2
	CardIds.HandlessForsaken_HelpingHandToken_BG25_010t,
	CardIds.HandlessForsaken_HelpingHandToken_BG25_010_Gt,
	CardIds.GeneralDrakkisath_SmolderwingToken_BG25_309t,
	CardIds.GeneralDrakkisath_SmolderwingToken_BG25_309_Gt,
	CardIds.MechaJaraxxus_RustedReggieToken,
	CardIds.MechaJaraxxus_MagtheridonPrimeToken,
	CardIds.MechaJaraxxus_BaltharakToken,
	CardIds.RustedReggie,
	CardIds.MagtheridonPrime,
	CardIds.Baltharak,
	CardIds.Shudderskull_TB_BaconShop_HP_022t_SKIN_C,
	CardIds.Shudderskull_TB_BaconShop_HP_022t_SKIN_C_G,
	CardIds.OzumatsTentacle_BG23_HERO_201pt_SKIN_A,
	CardIds.OzumatsTentacle_BG23_HERO_201pt_SKIN_A_G,
	// 26.2
	CardIds.Manasaber_CublingToken_BG26_800t,
	CardIds.Manasaber_CublingToken_BG26_800_Gt,
	CardIds.TentacleOfOctosariToken_BG26_803t,
	CardIds.TentacleOfOctosariToken_BG26_803_Gt,
	//27.2
	CardIds.OozelingGladiator_SlimyShieldToken_BG27_002t,
	CardIds.SurfNSurf_CrabMountToken_BG27_004t,
	CardIds.SurfNSurf_CrabMountToken_BG27_004_Gt,
	CardIds.SurfNSurf_CrabToken_BG27_004t2,
	CardIds.SurfNSurf_CrabToken_BG27_004_Gt2,
	CardIds.MechanizedGiftHorse_MechorseToken_BG27_008_Gt,
	CardIds.MechanizedGiftHorse_MechaponyToken_BG27_008t2,
	CardIds.MechanizedGiftHorse_MechorseToken_BG27_008_Gt,
	CardIds.MechanizedGiftHorse_MechaponyToken_BG27_008_Gt2,
	CardIds.TavernTier2,
	CardIds.TavernTier3,
	CardIds.TavernTier4,
	CardIds.TavernTier5,
	CardIds.TavernTier6,
	CardIds.TavernTier7_TB_BaconShopTechUp07_Button,
	CardIds.TombPillager_WON_340,
	// 27.2.2
	CardIds.MechanizedGiftHorse_MechorseToken_BG27_008t,
	CardIds.MechanizedGiftHorse_MechorseToken_BG27_008_Gt,
];

export const NON_DISCOVERABLE_BUDDIES = [
	CardIds.SpiritRaptor_BG22_HERO_001_Buddy,
	CardIds.RagingContender_TB_BaconShop_HERO_67_Buddy,
	CardIds.CaptainFairmount_BG21_HERO_000_Buddy,
	CardIds.FlightTrainer_BG20_HERO_283_Buddy,
	CardIds.JandicesApprentice_TB_BaconShop_HERO_71_Buddy,
	CardIds.CrimsonHandCenturion_TB_BaconShop_HERO_60_Buddy,
	CardIds.CrazyMonkey_TB_BaconShop_HERO_38_Buddy,
	CardIds.ShadowWarden_TB_BaconShop_HERO_62_Buddy,
	CardIds.NexusLord_TB_BaconShop_HERO_58_Buddy,
	CardIds.LeiFlamepaw_BG20_HERO_202_Buddy,
	CardIds.Watfin_BG23_HERO_303_Buddy,
	CardIds.NightmareEctoplasm_BG20_HERO_301_Buddy,
	CardIds.ManyWhelps_BG22_HERO_305_Buddy,
	CardIds.DranoshSaurfang_BG20_HERO_102_Buddy,
	CardIds.Tamuzo_BG23_HERO_201_Buddy,
	CardIds.MaxwellMightySteed_TB_BaconShop_HERO_40_Buddy,
	CardIds.Crabby_BG22_HERO_000_Buddy,
	CardIds.Mishmash_TB_BaconShop_HERO_33_Buddy,
	CardIds.PigeonLord_TB_BaconShop_HERO_12_Buddy,
	CardIds.VardensAquarrior_BG22_HERO_004_Buddy,
	CardIds.AcolyteOfYoggSaron_TB_BaconShop_HERO_35_Buddy,
	CardIds.SubmersibleChef_BG22_HERO_201_Buddy,
];

export const BUDDIES_TRIBE_REQUIREMENTS = [
	{
		buddy: CardIds.Vaelastrasz_TB_BaconShop_HERO_56_Buddy,
		tribe: Race.DRAGON,
	},
	{
		buddy: CardIds.DeathsHeadSage_BG20_HERO_103_Buddy,
		tribe: Race.QUILBOAR,
	},
	{
		buddy: CardIds.SparkfinSoothsayer_TB_BaconShop_HERO_55_Buddy,
		tribe: Race.MURLOC,
	},
	{
		buddy: CardIds.SubScrubber_BG22_HERO_200_Buddy,
		tribe: Race.MECH,
	},
	{
		buddy: CardIds.CoilfangElite_BG23_HERO_304_Buddy,
		tribe: Race.NAGA,
	},
	{
		buddy: CardIds.Kilrek_TB_BaconShop_HERO_37_Buddy,
		tribe: Race.DEMON,
	},
	{
		buddy: CardIds.ElementiumSquirrelBomb_TB_BaconShop_HERO_17_Buddy,
		tribe: Race.MECH,
	},
	{
		buddy: CardIds.TuskarrRaider_TB_BaconShop_HERO_18_Buddy,
		tribe: Race.PIRATE,
	},
	{
		buddy: CardIds.Festergut_BG25_HERO_100_Buddy,
		tribe: Race.UNDEAD,
	},
	{
		buddy: CardIds.ImperialDefender_BG22_HERO_007_Buddy,
		tribe: Race.NAGA,
	},
	{
		buddy: CardIds.ValithriaDreamwalker_TB_BaconShop_HERO_53_Buddy,
		tribe: Race.DRAGON,
	},
];

export const defaultStartingHp = (
	gameType: GameType,
	heroCardId: string,
	allCards: { getCard: (cardId: string | number) => ReferenceCard },
): number => {
	if (isBattlegrounds(gameType)) {
		const normalized = normalizeHeroCardId(heroCardId, allCards);
		return allCards.getCard(normalized).health || 30;
	}
	return 30;
};

export const isBattlegrounds = (gameType: GameType): boolean => {
	return [
		GameType.GT_BATTLEGROUNDS,
		GameType.GT_BATTLEGROUNDS_FRIENDLY,
		GameType.GT_BATTLEGROUNDS_AI_VS_AI,
		GameType.GT_BATTLEGROUNDS_PLAYER_VS_AI,
	].includes(gameType as GameType);
};

export const normalizeHeroCardId = (
	heroCardId: string,
	allCards: { getCard: (cardId: string | number) => ReferenceCard },
): string => {
	if (!heroCardId) {
		return heroCardId;
	}

	const normalizedAfterSkin = normalizeHeroCardIdAfterSkin(heroCardId, allCards);
	switch (normalizedAfterSkin) {
		case 'TB_BaconShop_HERO_59t':
			return 'TB_BaconShop_HERO_59';
		case CardIds.QueenAzshara_NagaQueenAzsharaToken:
			return CardIds.QueenAzshara_BG22_HERO_007;
		default:
			return normalizedAfterSkin;
	}
};

const normalizeHeroCardIdAfterSkin = (
	heroCardId: string,
	allCards: { getCard: (cardId: string | number) => ReferenceCard },
): string => {
	const heroCard = allCards.getCard(heroCardId);
	if (!!heroCard?.battlegroundsHeroParentDbfId) {
		const parentCard = allCards.getCard(heroCard.battlegroundsHeroParentDbfId);
		if (!!parentCard) {
			return parentCard.id;
		}
	}
	// Fallback to regex
	const bgHeroSkinMatch = heroCardId.match(/(.*)_SKIN_.*/);
	if (bgHeroSkinMatch) {
		return bgHeroSkinMatch[1];
	}
	return heroCardId;
};

export const getTribeName = (tribe: Race, i18n: { translateString: (input: string) => string }): string =>
	i18n.translateString(`app.battlegrounds.tribes.${Race[tribe]?.toLowerCase()}`);

export const getTribeIcon = (tribe: string | Race): string => {
	const referenceCardId = getReferenceTribeCardId(tribe);
	return `https://static.zerotoheroes.com/hearthstone/cardart/256x/${referenceCardId}.jpg`;
};

export const getReferenceTribeCardId = (tribe: string | Race): string => {
	let referenceCardId: string;
	tribe = (tribe as string)?.padStart ? (tribe as string).toLowerCase() : tribe;
	switch (tribe) {
		case 'mech':
		case Race.MECH:
			referenceCardId = CardIds.DeflectOBot_BGS_071;
			break;
		case 'beast':
		case Race.BEAST:
			referenceCardId = CardIds.MamaBear_BGS_021;
			break;
		case 'demon':
		case Race.DEMON:
			referenceCardId = CardIds.ImpulsiveTrickster_BG21_006;
			break;
		case 'dragon':
		case Race.DRAGON:
			referenceCardId = CardIds.KalecgosArcaneAspect_BGS_041;
			break;
		case 'murloc':
		case Race.MURLOC:
			referenceCardId = CardIds.RockpoolHunter_BG_UNG_073;
			break;
		case 'pirate':
		case Race.PIRATE:
			referenceCardId = CardIds.Scallywag_BGS_061;
			break;
		case 'elemental':
		case Race.ELEMENTAL:
			referenceCardId = CardIds.Sellemental_BGS_115;
			break;
		case 'naga':
		case Race.NAGA:
			referenceCardId = CardIds.ShellCollector_BG23_002;
			break;
		case 'quilboar':
		case Race.QUILBOAR:
			referenceCardId = CardIds.SunBaconRelaxer_BG20_301;
			break;
		case 'undead':
		case Race.UNDEAD:
			referenceCardId = CardIds.EternalKnight_BG25_008;
			break;
		case 'all':
		case Race.ALL:
			referenceCardId = CardIds.Amalgadon_BGS_069;
			break;
		default:
			referenceCardId = CardIds.PatientScout_BG24_715;
			break;
	}
	return referenceCardId;
};

export const getHeroPower = (
	heroCardId: string,
	allCards: { getCard: (cardId: string | number) => ReferenceCard },
): string => {
	const normalized = normalizeHeroCardId(heroCardId, allCards);
	switch (normalized) {
		case 'TB_BaconShop_HERO_01':
			return 'TB_BaconShop_HP_001';
		case 'TB_BaconShop_HERO_02':
			return 'TB_BaconShop_HP_011';
		case 'TB_BaconShop_HERO_08':
			return 'TB_BaconShop_HP_069';
		case CardIds.RagnarosTheFirelord_TB_BaconShop_HERO_11:
			return CardIds.DieInsects_TB_BaconShop_HP_087;
		case 'TB_BaconShop_HERO_12':
			return 'TB_BaconShop_HP_041';
		case CardIds.QueenWagtoggle_TB_BaconShop_HERO_14:
			return CardIds.WaxWarband;
		case 'TB_BaconShop_HERO_15':
			return 'TB_BaconShop_HP_010';
		case 'TB_BaconShop_HERO_16':
			return 'TB_BaconShop_HP_044';
		case 'TB_BaconShop_HERO_17':
			return 'TB_BaconShop_HP_015';
		case 'TB_BaconShop_HERO_18':
			return 'TB_BaconShop_HP_072';
		case 'TB_BaconShop_HERO_20':
			return 'TB_BaconShop_HP_018';
		case 'TB_BaconShop_HERO_21':
			return 'TB_BaconShop_HP_020';
		case 'TB_BaconShop_HERO_22':
			return 'TB_BaconShop_HP_024';
		case CardIds.Shudderwock_TB_BaconShop_HERO_23:
			return CardIds.SnickerSnack;
		case 'TB_BaconShop_HERO_25':
			return 'TB_BaconShop_HP_049';
		case 'TB_BaconShop_HERO_27':
			return 'TB_BaconShop_HP_014';
		case 'TB_BaconShop_HERO_28':
			return 'TB_BaconShop_HP_028';
		case 'TB_BaconShop_HERO_30':
			return 'TB_BaconShop_HP_043';
		case 'TB_BaconShop_HERO_31':
			return 'TB_BaconShop_HP_009';
		case 'TB_BaconShop_HERO_33':
			return 'TB_BaconShop_HP_033';
		case 'TB_BaconShop_HERO_34':
			return 'TB_BaconShop_HP_035';
		case 'TB_BaconShop_HERO_35':
			return 'TB_BaconShop_HP_039';
		case 'TB_BaconShop_HERO_36':
			return 'TB_BaconShop_HP_042';
		case 'TB_BaconShop_HERO_37':
			return 'TB_BaconShop_HP_036';
		case 'TB_BaconShop_HERO_38':
			return 'TB_BaconShop_HP_038';
		case 'TB_BaconShop_HERO_39':
			return 'TB_BaconShop_HP_040';
		case 'TB_BaconShop_HERO_40':
			return 'TB_BaconShop_HP_057';
		case 'TB_BaconShop_HERO_41':
			return 'TB_BaconShop_HP_046';
		case 'TB_BaconShop_HERO_42':
			return 'TB_BaconShop_HP_047';
		case 'TB_BaconShop_HERO_43':
			return 'TB_BaconShop_HP_048';
		// case 'TB_BaconShop_HERO_44':
		// 	return 'TB_BaconShop_HP_050';
		case 'TB_BaconShop_HERO_45':
			return 'TB_BaconShop_HP_053';
		case 'TB_BaconShop_HERO_47':
			return 'TB_BaconShop_HP_051';
		case 'TB_BaconShop_HERO_49':
			return 'TB_BaconShop_HP_054';
		case 'TB_BaconShop_HERO_50':
			return 'TB_BaconShop_HP_077';
		case 'TB_BaconShop_HERO_52':
			return 'TB_BaconShop_HP_061';
		case 'TB_BaconShop_HERO_53':
			return 'TB_BaconShop_HP_062';
		case 'TB_BaconShop_HERO_55':
			return 'TB_BaconShop_HP_056';
		case 'TB_BaconShop_HERO_56':
			return 'TB_BaconShop_HP_064';
		case 'TB_BaconShop_HERO_57':
			return 'TB_BaconShop_HP_063';
		case 'TB_BaconShop_HERO_58':
			return 'TB_BaconShop_HP_052';
		case 'TB_BaconShop_HERO_59t':
			return 'TB_BaconShop_HP_065t2';
		case 'TB_BaconShop_HERO_59':
			return 'TB_BaconShop_HP_065';
		case 'TB_BaconShop_HERO_60':
			return 'TB_BaconShop_HP_066';
		case 'TB_BaconShop_HERO_61':
			return 'TB_BaconShop_HP_067';
		case 'TB_BaconShop_HERO_62':
			return 'TB_BaconShop_HP_068';
		case 'TB_BaconShop_HERO_64':
			return 'TB_BaconShop_HP_074';
		case CardIds.CaptainHooktusk_TB_BaconShop_HERO_67:
			return CardIds.TrashForTreasure;
		case 'TB_BaconShop_HERO_68':
			return 'TB_BaconShop_HP_076';
		case 'TB_BaconShop_HERO_70':
			return 'TB_BaconShop_HP_080';
		case 'TB_BaconShop_HERO_71':
			return 'TB_BaconShop_HP_084';
		case 'TB_BaconShop_HERO_72':
			return 'TB_BaconShop_HP_081';
		case 'TB_BaconShop_HERO_74':
			return 'TB_BaconShop_HP_082';
		case CardIds.Chenvaala_TB_BaconShop_HERO_78:
			return CardIds.Avalanche_TB_BaconShop_HP_088;
		case CardIds.Rakanishu_TB_BaconShop_HERO_75:
			return CardIds.TavernLighting;
		case CardIds.Alakir:
			return CardIds.SwattingInsects;
		case CardIds.ZephrysTheGreat_TB_BaconShop_HERO_91:
			return CardIds.ThreeWishes;
		case CardIds.SilasDarkmoon_TB_BaconShop_HERO_90:
			return CardIds.ComeOneComeAll;
		case CardIds.Cthun_TB_BaconShop_HERO_29:
			return CardIds.SaturdayCthuns;
		case CardIds.Nzoth:
			return CardIds.AvatarOfNzoth;
		case CardIds.Yshaarj:
			return CardIds.EmbraceYourRage;
		case CardIds.Tickatus_TB_BaconShop_HERO_94:
			return CardIds.PrizeWall;
		case CardIds.Greybough_TB_BaconShop_HERO_95:
			return CardIds.SproutItOut;
		case CardIds.OverlordSaurfang_BG20_HERO_102:
			return CardIds.OverlordSaurfang_ForTheHorde;
		case CardIds.DeathSpeakerBlackthorn_BG20_HERO_103:
			return CardIds.DeathSpeakerBlackthorn_Bloodbound;
		case CardIds.Voljin_BG20_HERO_201:
			return CardIds.Voljin_SpiritSwap_BG20_HERO_201p;
		case CardIds.Xyrella_BG20_HERO_101:
			return CardIds.Xyrella_SeeTheLight;
		case CardIds.MutanusTheDevourer_BG20_HERO_301:
			return CardIds.MutanusTheDevourer_Devour;
		case CardIds.GuffRunetotem_BG20_HERO_242:
			return CardIds.GuffRunetotem_NaturalBalance;
		case CardIds.KurtrusAshfallen_BG20_HERO_280:
			return CardIds.KurtrusAshfallen_FinalShowdown;
		case CardIds.Galewing:
			return CardIds.Galewing_DungarsGryphon;
		case CardIds.TradePrinceGallywix_TB_BaconShop_HERO_10:
			return CardIds.SmartSavings;
		case CardIds.MasterNguyen:
			return CardIds.MasterNguyen_PowerOfTheStorm;
		case CardIds.CarielRoame_BG21_HERO_000:
			return CardIds.CarielRoame_Conviction;
		case CardIds.Sneed_BG21_HERO_030:
			return CardIds.Sneed_SneedsReplicator;
		case CardIds.CookieTheCook_BG21_HERO_020:
			return CardIds.CookieTheCook_StirThePot;
		case CardIds.TamsinRoame_BG20_HERO_282:
			return CardIds.TamsinRoame_FragrantPhylactery;
		case CardIds.ScabbsCutterbutter_BG21_HERO_010:
			return CardIds.ScabbsCutterbutter_ISpy;
		case CardIds.Brukan_BG22_HERO_001:
			return CardIds.Brukan_EmbraceTheElements;
		case CardIds.Drekthar_BG22_HERO_002:
			return CardIds.Drekthar_LeadTheFrostwolves;
		case CardIds.VanndarStormpike_BG22_HERO_003:
			return CardIds.VanndarStormpike_LeadTheStormpikes;
		case CardIds.TavishStormpike_BG22_HERO_000:
			return CardIds.TavishStormpike_Deadeye;
		case CardIds.VardenDawngrasp_BG22_HERO_004:
			return CardIds.VardenDawngrasp_TwiceAsNice;
		case CardIds.Rokara_BG20_HERO_100:
			return CardIds.Rokara_GloryOfCombat;
		case CardIds.Onyxia_BG22_HERO_305:
			return CardIds.Onyxia_Broodmother;
		case CardIds.AmbassadorFaelin_BG22_HERO_201:
			return CardIds.AmbassadorFaelin_ExpeditionPlans;
		case CardIds.IniStormcoil_BG22_HERO_200:
			return CardIds.IniStormcoil_Mechgyver;
		case CardIds.QueenAzshara_BG22_HERO_007:
			return CardIds.QueenAzshara_AzsharasAmbition;
		case CardIds.QueenAzshara_NagaQueenAzsharaToken:
			return CardIds.QueenAzshara_NagaConquest;
		case CardIds.Ozumat_BG23_HERO_201:
			return CardIds.Ozumat_Tentacular;
		case CardIds.LadyVashj_BG23_HERO_304:
			return CardIds.LadyVashj_RelicsOfTheDeep;
		case CardIds.HeistbaronTogwaggle_BG23_HERO_305:
			return CardIds.HeistbaronTogwaggle_ThePerfectCrime;
		case CardIds.MurlocHolmes_BG23_HERO_303:
			return CardIds.MurlocHolmes_DetectiveForHire;
		case CardIds.SireDenathrius_BG24_HERO_100:
			return CardIds.SireDenathrius_Whodunitquestion;
		case CardIds.SylvanasWindrunner_BG23_HERO_306:
			return CardIds.SylvanasWindrunner_ReclaimedSouls;
		case CardIds.TheJailer_TB_BaconShop_HERO_702:
			return CardIds.RunicEmpowerment;
		case CardIds.EnhanceOMechano_BG24_HERO_204:
			return CardIds.EnhanceOMechano_Enhancification;
		case CardIds.ProfessorPutricide_BG25_HERO_100:
			return CardIds.ProfessorPutricide_BuildAnUndead;
		case CardIds.TeronGorefiend_BG25_HERO_103:
			return CardIds.TeronGorefiend_RapidReanimation;
		case CardIds.ETCBandManager_BG25_HERO_105:
			return CardIds.ETCBandManager_SignANewArtist;
		case CardIds.RockMasterVoone_BG26_HERO_104:
			return CardIds.RockMasterVoone_UpbeatHarmony;
		case CardIds.IngeTheIronHymn:
			return CardIds.IngeTheIronHymn_MajorHymn;
		case CardIds.CapnHoggarr_BG26_HERO_101:
			return CardIds.CapnHoggarr_ImTheCapnNow;
		case CardIds.Diablo:
			return CardIds.Diablo_RealmOfTerror;
		case CardIds.ThorimStormlord_BG27_HERO_801:
			return CardIds.ThorimStormlord_ChooseYourChampion_BG27_HERO_801p2;

		case '':
			return null; // new heroes
	}
};
