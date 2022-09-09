export interface QuestsInfo {
	readonly quests: readonly QuestInfo[];
}

export interface QuestInfo {
	readonly id: number;
	readonly rewardTrackType: number;
	readonly name: string;
	readonly description: string;
	readonly quota: number;
	readonly rewardTrackXp: number;
	readonly rewardListId: number;
}
