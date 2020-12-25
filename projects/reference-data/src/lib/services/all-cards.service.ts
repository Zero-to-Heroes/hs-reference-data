import { ReferenceCard } from '../models/reference-cards/reference-card';
import { http } from './utils';

const CARDS_CDN_URL = 'https://static.zerotoheroes.com/hearthstone/jsoncards/cards.json?v=10';

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

	public async initializeCardsDb(): Promise<void> {
		return new Promise<void>(async (resolve, reject) => {
			if (this.allCards) {
				// console.debug('[all-cards] already loaded all cards');
				resolve();
				return;
			}
			this.cache = {};
			console.debug('[all-cards] retrieving cards from CDN');
			const cardsStr = await http(CARDS_CDN_URL);
			if (!cardsStr || cardsStr.length === 0) {
				console.error('[all-cards] could not load cards', CARDS_CDN_URL);
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
