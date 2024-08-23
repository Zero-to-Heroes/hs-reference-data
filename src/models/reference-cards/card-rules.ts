export interface CardRules {
	[cardId: string]: CardRule;
}
export interface CardRule {
	readonly bgsBannedInLobbyWithRaces: readonly string[];
	readonly bgsOnlyInLobbyWithRaces: readonly string[];
}
