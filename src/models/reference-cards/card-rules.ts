export interface CardRules {
	[cardId: string]: CardRule;
}
export interface CardRule {
	readonly bgsMinionTypesRules?: BgsMinionTypesRules;
}

export interface BgsMinionTypesRules {
	readonly bannedWithTypesInLobby?: readonly string[];
	readonly needTypesInLobby?: readonly string[];
	readonly needBoardTypes?: readonly string[];
	readonly needMenagerie?: boolean;
	readonly alwaysAvailableForHeroes?: readonly string[];
	readonly bannedForHeroes?: readonly string[];
	readonly requireTavernTier3?: boolean;
	readonly requireDivineShieldMinions?: number;
}
