import { GameTag } from '../../public-api';
import { RarityTYpe } from './rarity.type';
import { ReferencePlayerClass } from './reference-player-class';

export interface ReferenceCard {
	readonly id: string;
	readonly dbfId: number;
	readonly name: string;
	readonly set: string;
	readonly classes?: readonly string[];
	readonly touristFor?: readonly string[];
	/** @deprecated */
	readonly playerClass: ReferencePlayerClass;
	/** @deprecated */
	readonly cardClass: string;
	readonly cost?: number;
	readonly additionalCosts?: {
		readonly BLOODRUNE?: number;
		readonly FROSTRUNE?: number;
		readonly UNHOLYRUNE?: number;
		readonly DEATH?: number;
	};
	readonly attack?: number;
	readonly health?: number;
	readonly audio?: {
		[audioKey: string]: readonly string[];
	};
	readonly audio2?: ReferenceCardAudio;
	readonly text: string;
	readonly collectionText: string;
	readonly flavor: string;
	readonly type: string;
	readonly mechanics: string[];
	readonly referencedTags?: string[];
	readonly tags?: { [key in keyof typeof GameTag]?: number };
	readonly rarity?: RarityTYpe;
	readonly premium?: boolean;
	readonly collectible?: boolean;
	readonly race?: string;
	readonly races?: readonly string[];
	readonly faction?: string;
	readonly techLevel?: number;
	readonly isBaconPool?: boolean;
	readonly durability?: number;
	readonly armor?: number;
	readonly hideStats?: boolean;
	readonly enchantmentDbfId?: number;
	readonly entityDbfIf?: number;

	readonly isCoin?: boolean;
	readonly isTreant?: boolean;

	readonly battlegroundsHero?: boolean;
	readonly battlegroundsHeroSkin?: boolean;
	readonly battlegroundsHeroParentDbfId?: number;
	readonly battlegroundsPremiumDbfId?: number;
	readonly battlegroundsNormalDbfId?: number;
	readonly battlegroundsPutridicePool1?: boolean;
	readonly battlegroundsPutridicePool2?: boolean;
	readonly battlegroundsPutridiceSummonerExclusion?: boolean;

	// TODO: change this to use the enum later?
	readonly spellSchool?: string;
	readonly artist?: string;
	readonly questRewardDbfId?: number;
	/** @deprecated */
	readonly deckDuplicateDbfId?: number;
	readonly counterpartCards?: readonly number[];
	readonly relatedCardDbfIds?: readonly number[];

	readonly availableAsDiamond?: boolean;
	readonly availableAsSignature?: boolean;

	readonly mercenary: boolean;
	readonly mercenaryRole: string;
	readonly mercenaryAbility: boolean;
	readonly mercenaryPassiveAbility: boolean;
	readonly mercenaryEquipment: boolean;
	readonly mercenaryTreasure: boolean;
	readonly mercenaryAbilityCooldown: number;

	readonly locales?: readonly CardLocale[];

	readonly otherTags: readonly string[];
}

export interface CardLocale {
	readonly locale: string;
	readonly name: string;
	readonly text?: string;
	readonly flavor?: string;
}

export interface ReferenceCardAudio {
	// The main sounds, like Play, Death, etc.
	[audioKey: string]: {
		// Each sound can be a juxtaposition of several effects
		[effectKey: string]: {
			// These sounds are always played
			readonly mainSounds: readonly string[];
			// One of each of these is played, with a probability depending on its weight
			readonly randomSounds: readonly {
				readonly weight: number;
				readonly sound: string;
			}[];
		};
	};
}
