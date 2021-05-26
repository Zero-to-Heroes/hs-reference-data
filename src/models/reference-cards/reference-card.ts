import { SpellSchool } from '../../enums/spell-school';
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
	readonly battlegroundsPremiumDbfId?: number;
	readonly battlegroundsNormalDbfId?: number;
	readonly spellSchool?: SpellSchool;
}
