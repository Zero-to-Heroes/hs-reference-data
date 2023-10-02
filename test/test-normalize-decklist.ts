import { DeckDefinition, encode } from '@firestone-hs/deckstrings';
import { AllCardsService, GameFormat, normalizeDeckList } from '../src/public-api';

const testWild = async () => {
	const allCards = new AllCardsService();
	await allCards.initializeCardsDb();
	const original: DeckDefinition = {
		heroes: [7],
		format: GameFormat.FT_WILD,
		cards: [
			// Innervate core
			[69550, 2],
		],
	};
	const expected: DeckDefinition = {
		heroes: [7],
		format: GameFormat.FT_WILD,
		cards: [
			// Innervate legacy
			[254, 2],
		],
	};
	const originalEncoded = encode(original);
	const expectedEncoded = encode(expected);
	const actual = normalizeDeckList(originalEncoded, allCards);
	const isSame = actual === expectedEncoded;
	console.log('isSame?', isSame);
	if (!isSame) {
		console.error('Expected', expectedEncoded);
		console.error('Actual', actual);
		throw new Error('Expected and actual are not the same');
	}
};

const testStandard = async () => {
	const allCards = new AllCardsService();
	await allCards.initializeCardsDb();
	const original: DeckDefinition = {
		heroes: [7],
		format: GameFormat.FT_STANDARD,
		cards: [
			// Innervate core
			[69550, 2],
		],
	};
	const expected: DeckDefinition = {
		heroes: [7],
		format: GameFormat.FT_STANDARD,
		cards: [
			// Innervate core (legacy is not in standard)
			[69550, 2],
		],
	};
	const originalEncoded = encode(original);
	const expectedEncoded = encode(expected);
	const actual = normalizeDeckList(originalEncoded, allCards);
	const isSame = actual === expectedEncoded;
	console.log('isSame?', isSame);
	if (!isSame) {
		console.error('Expected', expectedEncoded);
		console.error('Actual', actual);
		throw new Error('Expected and actual are not the same');
	}
};

testWild();
testStandard();
