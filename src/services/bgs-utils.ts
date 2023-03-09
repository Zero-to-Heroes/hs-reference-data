import { CardIds, GameType, Race } from '../public-api';

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
