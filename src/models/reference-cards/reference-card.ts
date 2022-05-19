import { RarityTYpe } from './rarity.type';
import { ReferencePlayerClass } from './reference-player-class';

export interface ReferenceCard {
	readonly id: string;
	readonly dbfId: number;
	readonly name: string;
	readonly set: string;
	readonly playerClass: ReferencePlayerClass;
	readonly classes?: readonly string[];
	readonly cardClass: string;
	readonly cost?: number;
	readonly attack?: number;
	readonly health?: number;
	readonly audio?: {
		[audioKey: string]: readonly string[];
	};
	readonly text: string;
	readonly collectionText: string;
	readonly flavor: string;
	readonly type: string;
	readonly mechanics: string[];
	readonly referencedTags?: string[];
	readonly rarity?: RarityTYpe;
	readonly collectible?: boolean;
	readonly race?: string;
	readonly techLevel?: number;
	readonly durability?: number;
	readonly armor?: number;
	readonly battlegroundsHero?: boolean;
	readonly battlegroundsHeroSkin?: boolean;
	readonly battlegroundsHeroParentDbfId?: number;
	readonly battlegroundsPremiumDbfId?: number;
	readonly battlegroundsNormalDbfId?: number;
	// TODO: change this to use the enum later?
	readonly spellSchool?: string;
	readonly artist?: string;
	readonly questRewardDbfId?: number;
	readonly deckDuplicateDbfId?: number;
	readonly relatedCardDbfIds: readonly number[];

	readonly mercenary: boolean;
	readonly mercenaryRole: string;
	readonly mercenaryAbility: boolean;
	readonly mercenaryPassiveAbility: boolean;
	readonly mercenaryEquipment: boolean;
	readonly mercenaryTreasure: boolean;
	readonly mercenaryAbilityCooldown: number;

	readonly locales?: readonly CardLocale[];
}

export interface CardLocale {
	readonly locale: string;
	readonly name: string;
}
