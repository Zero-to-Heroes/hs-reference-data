import { AllCardsService, CardIds, GameType, Race, ReferenceCard } from '../public-api';

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

export const defaultStartingHp = (gameType: GameType, heroCardId: string): number => {
	if (isBattlegrounds(gameType)) {
		switch (heroCardId) {
			case CardIds.PatchwerkBattlegrounds:
				return 60;
			default:
				return 40;
		}
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

export const getHeroPower = (heroCardId: string, allCards: AllCardsService): string => {
	const normalized = normalizeHeroCardId(heroCardId, allCards);
	switch (normalized) {
		case 'TB_BaconShop_HERO_01':
			return 'TB_BaconShop_HP_001';
		case 'TB_BaconShop_HERO_02':
			return 'TB_BaconShop_HP_011';
		case 'TB_BaconShop_HERO_08':
			return 'TB_BaconShop_HP_069';
		case CardIds.RagnarosTheFirelordBattlegrounds:
			return CardIds.DieInsectsBattlegrounds_TB_BaconShop_HP_087;
		case 'TB_BaconShop_HERO_12':
			return 'TB_BaconShop_HP_041';
		case CardIds.QueenWagtoggleBattlegrounds:
			return CardIds.WaxWarbandBattlegrounds;
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
		case 'TB_BaconShop_HERO_23':
			return 'TB_BaconShop_HP_022';
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
		case CardIds.CaptainHooktuskBattlegrounds:
			return CardIds.TrashForTreasureBattlegrounds;
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
		case CardIds.ChenvaalaBattlegrounds:
			return CardIds.AvalancheBattlegrounds;
		case CardIds.RakanishuBattlegrounds:
			return CardIds.TavernLightingBattlegrounds;
		case CardIds.AlakirBattlegrounds:
			return CardIds.SwattingInsectsBattlegrounds;
		case CardIds.ZephrysTheGreatBattlegrounds:
			return CardIds.ThreeWishesBattlegrounds;
		case CardIds.SilasDarkmoonBattlegrounds:
			return CardIds.ComeOneComeAllBattlegrounds;
		case CardIds.CthunBattlegrounds:
			return CardIds.SaturdayCthunsBattlegrounds;
		case CardIds.NzothBattlegrounds:
			return CardIds.AvatarOfNzothBattlegrounds;
		case CardIds.YshaarjBattlegrounds:
			return CardIds.EmbraceYourRageBattlegrounds;
		case CardIds.TickatusBattlegrounds:
			return CardIds.PrizeWallBattlegrounds;
		case CardIds.GreyboughBattlegrounds:
			return CardIds.SproutItOutBattlegrounds;
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
		case CardIds.TradePrinceGallywixBattlegrounds:
			return CardIds.SmartSavingsBattlegrounds;
		case CardIds.MasterNguyen:
			return CardIds.MasterNguyen_PowerOfTheStorm;
		case CardIds.CarielRoame_BG21_HERO_000:
			return CardIds.CarielRoame_ConvictionRank1;
		case CardIds.Diablo:
			return CardIds.Diablo_RealmOfTerror;
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
		case CardIds.TheJailerBattlegrounds:
			return CardIds.RunicEmpowermentBattlegrounds;
		case CardIds.EnhanceOMechano_BG24_HERO_204:
			return CardIds.EnhanceOMechano_Enhancification;
		case CardIds.ProfessorPutricide_BG25_HERO_100:
			return CardIds.ProfessorPutricide_BuildAnUndead;
		case CardIds.TeronGorefiend_BG25_HERO_103:
			return CardIds.TeronGorefiend_RapidReanimation;

		case '':
			return null; // new heroes
	}
};
