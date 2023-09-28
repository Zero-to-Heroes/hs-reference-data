import { DeckDefinition, encode } from '@firestone-hs/deckstrings';
import { AllCardsService, normalizeDeckList } from '../src/public-api';

const test = async () => {
	const allCards = new AllCardsService();
	await allCards.initializeCardsDb();
	const original: DeckDefinition = {
		heroes: [7],
		format: 1,
		cards: [
			// Battlefiend
			[58487, 2],
		],
	};
	const expected: DeckDefinition = {
		heroes: [7],
		format: 1,
		cards: [
			// Battlefiend core
			[69586, 2],
		],
	};
	const originalEncoded = encode(original);
	const expectedEncoded = encode(expected);
	const actual = normalizeDeckList(originalEncoded, allCards);
	const isSame = JSON.stringify(actual) === JSON.stringify(expectedEncoded);
	console.log('isSame?', isSame);
	if (!isSame) {
		console.error('Expected', expectedEncoded);
		console.error('Actual', actual);
	}
};

test();
