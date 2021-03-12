import { CardIds } from '../card-ids';
import { ReferenceCard } from '../models/reference-cards/reference-card';
import { http } from './utils';

const CARDS_CDN_URL = 'https://static.zerotoheroes.com/hearthstone/jsoncards/cards.json';

export class AllCardsService {
	private allCards: ReferenceCard[];
	private cache: any = {};

	constructor() {
		// We don't call it in the constructor because we want the app to be in control
		// of how they load the cards, and for it to be aware of when cards have been loaded
		// this.retrieveAllCards();
	}

	// We keep this synchronous because we ensure, in the game init pipeline, that loading cards
	// is the first thing we do
	public getCard(id: string, errorWhenUndefined = true): ReferenceCard {
		if (this.cache[id]) {
			return this.cache[id];
		}
		if (!this.allCards) {
			console.debug('getCard', 'cards not initialized yet', id);
			return {} as ReferenceCard;
		}
		const candidates = this.allCards.filter((card) => card.id === id);
		if (errorWhenUndefined && (!candidates || candidates.length === 0)) {
			console.debug('Could not find card for id', id, new Error().stack);
			return {} as ReferenceCard;
		}
		if (candidates.length === 1) {
			this.cache[id] = candidates[0];
		}
		return candidates[0];
	}

	public getCardFromDbfId(dbfId: number): ReferenceCard {
		if (!this.allCards) {
			console.debug('getCardFromDbfId', 'cards not initialized yet', dbfId);
			return {} as ReferenceCard;
		}
		return this.allCards.find((card) => card.dbfId === +dbfId);
	}

	public getCardsFromDbfIds(dbfIds: number[]): ReferenceCard[] {
		if (!this.allCards) {
			console.debug('getCardsFromDbfIds', 'cards not initialized yet', dbfIds);
			return [];
		}
		return this.allCards.filter((card) => dbfIds.indexOf(card.dbfId) !== -1);
	}

	public getCards(): ReferenceCard[] {
		return this.allCards;
	}

	public async initializeCardsDb(version: string = ''): Promise<void> {
		return new Promise<void>(async (resolve, reject) => {
			if (this.allCards) {
				// console.debug('[all-cards] already loaded all cards');
				resolve();
				return;
			}
			this.cache = {};
			console.debug('[all-cards] retrieving cards from CDN');
			const cardsStr = await http(CARDS_CDN_URL + version);
			if (!cardsStr || cardsStr.length === 0) {
				console.error('[all-cards] could not load cards', CARDS_CDN_URL + version);
			}
			console.debug('[all-cards] retrieved all cards');
			this.allCards = JSON.parse(cardsStr);
			for (const card of this.allCards) {
				if (card.id) {
					this.cache[card.id] = card;
				}
			}
			resolve();
		});
	}
}

// The spellstones are present in the AI decklist in their basic version
// However, if the AI plays the spellstone's upgraded version, we need to remove
// the basic one from the decklist
export const getBaseCardId = (cardId: string): string => {
	if (!cardId) {
		return null;
	}

	switch (cardId) {
		// The spellstones
		case 'LOOT_103t1':
		case 'LOOT_103t2':
			return 'LOOT_103';
		case 'LOOT_043t2':
		case 'LOOT_043t3':
			return 'LOOT_043';
		case 'LOOT_051t1':
		case 'LOOT_051t2':
			return 'LOOT_051';
		case 'LOOT_064t1':
		case 'LOOT_064t2':
			return 'LOOT_064';
		case 'LOOT_080t2':
		case 'LOOT_080t3':
			return 'LOOT_080';
		case 'LOOT_091t1':
		case 'LOOT_091t2':
			return 'LOOT_091';
		case 'LOOT_203t2':
		case 'LOOT_203t3':
			return 'LOOT_203';
		case 'LOOT_503t':
		case 'LOOT_503t2':
			return 'LOOT_503';
		case 'LOOT_507t':
		case 'LOOT_507t2':
			return 'LOOT_507';
		case 'FB_Champs_LOOT_080t2':
		case 'FB_Champs_LOOT_080t3':
			return 'FB_Champs_LOOT_080';
		// The "unidentified" spells
		case 'LOOT_278t1':
			return 'LOOT_278';
		case 'LOOT_278t2':
			return 'LOOT_278';
		case 'LOOT_278t3':
			return 'LOOT_278';
		case 'LOOT_278t4':
			return 'LOOT_278';
		case 'LOOT_285t':
			return 'LOOT_285';
		case 'LOOT_285t2':
			return 'LOOT_285';
		case 'LOOT_285t3':
			return 'LOOT_285';
		case 'LOOT_285t4':
			return 'LOOT_285';
		case 'LOOT_286t1':
			return 'LOOT_286';
		case 'LOOT_286t2':
			return 'LOOT_286';
		case 'LOOT_286t3':
			return 'LOOT_286';
		case 'LOOT_286t4':
			return 'LOOT_286';
		case 'DAL_366t1':
			return 'DAL_366';
		case 'DAL_366t2':
			return 'DAL_366';
		case 'DAL_366t3':
			return 'DAL_366';
		case 'DAL_366t4':
			return 'DAL_366';
		// Galakrond
		case 'DRG_600t2':
			return 'DRG_600';
		case 'DRG_600t3':
			return 'DRG_600';
		case 'DRG_610t2':
			return 'DRG_610';
		case 'DRG_610t3':
			return 'DRG_610';
		case 'DRG_620t2':
			return 'DRG_620';
		case 'DRG_620t3':
			return 'DRG_620';
		case 'DRG_650t2':
			return 'DRG_650';
		case 'DRG_650t3':
			return 'DRG_650';
		case 'DRG_660t2':
			return 'DRG_660';
		case 'DRG_660t3':
			return 'DRG_660';
		// Corrupted
		case 'DMF_054t':
			return 'DMF_054';
		case 'DMF_061t':
			return 'DMF_061';
		case 'DMF_064t':
			return 'DMF_064';
		case 'DMF_073t':
			return 'DMF_073';
		case 'DMF_078t':
			return 'DMF_078';
		case 'DMF_080t':
			return 'DMF_080';
		case 'DMF_082t':
			return 'DMF_082';
		case 'DMF_083t':
			return 'DMF_083';
		case 'DMF_090t':
			return 'DMF_090';
		case 'DMF_101t':
			return 'DMF_101';
		case 'DMF_105t':
			return 'DMF_105';
		case 'DMF_117t':
			return 'DMF_117';
		case 'DMF_117t2':
			return 'DMF_117';
		case 'DMF_118t':
			return 'DMF_118';
		case 'DMF_124t':
			return 'DMF_124';
		case 'DMF_163t':
			return 'DMF_163';
		case 'DMF_174t':
			return 'DMF_174';
		case 'DMF_184t':
			return 'DMF_184';
		case 'DMF_186a':
			return 'DMF_186';
		case 'DMF_244t':
			return 'DMF_244';
		case 'DMF_247t':
			return 'DMF_247';
		case 'DMF_248t':
			return 'DMF_248';
		case 'DMF_517a':
			return 'DMF_517';
		case 'DMF_526a':
			return 'DMF_526';
		case 'DMF_701t':
			return 'DMF_701';
		case 'DMF_703t':
			return 'DMF_703';
		case 'DMF_730t':
			return 'DMF_730';
		case 'DMF_526a':
			return 'DMF_526';
		case CardIds.NonCollectible.Druid.DreamingDrake_DreamingDrakeToken:
			return CardIds.Collectible.Druid.DreamingDrake;
		case CardIds.NonCollectible.Paladin.LibramofJudgment_LibramOfJudgmentToken:
			return CardIds.Collectible.Paladin.LibramOfJudgment;
		case CardIds.NonCollectible.Neutral.LuckysoulHoarder_LuckysoulHoarderToken:
			return CardIds.Collectible.Neutral.LuckysoulHoarder;
		case CardIds.NonCollectible.Neutral.NitroboostPoison_NitroboostPoisonToken:
			return CardIds.Collectible.Neutral.NitroboostPoison;
		// The "improve during run" cards in Duels

		// Transfer Student should be handled on a case by case basis
	}

	if (cardId.startsWith(CardIds.Collectible.Neutral.TransferStudent)) {
		return CardIds.Collectible.Neutral.TransferStudent;
	}

	return cardId;
};
