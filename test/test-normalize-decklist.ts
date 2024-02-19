import { DeckDefinition, encode } from '@firestone-hs/deckstrings';
import { AllCardsService, GameFormat } from '../src/public-api';

const testWild = async () => {
	console.time('init allCards');
	const allCards = new AllCardsService();
	await allCards.initializeCardsDb();
	console.timeEnd('init allCards');

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
	const actual = allCards.normalizeDeckList(originalEncoded);
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
	const actual = allCards.normalizeDeckList(originalEncoded);
	const isSame = actual === expectedEncoded;
	console.log('isSame?', isSame);
	if (!isSame) {
		console.error('Expected', expectedEncoded);
		console.error('Actual', actual);
		throw new Error('Expected and actual are not the same');
	}
};

const testStandard2 = async () => {
	const allCards = new AllCardsService();
	await allCards.initializeCardsDb();

	const withWonders: DeckDefinition = {
		heroes: [7],
		format: GameFormat.FT_STANDARD,
		cards: [
			// Acolyte of Pain Wonders
			[106559, 2],
		],
	};
	const withCore: DeckDefinition = {
		heroes: [7],
		format: GameFormat.FT_STANDARD,
		cards: [
			// Acolyte of Pain Core
			[76316, 2],
		],
	};
	const expected: DeckDefinition = {
		heroes: [7],
		format: GameFormat.FT_STANDARD,
		cards: [
			// Core
			[76316, 2],
		],
	};
	const withWondersEncoded = encode(withWonders);
	const withCoreEncoded = encode(withCore);
	const expectedEncoded = encode(expected);

	// Validate Wonders
	const actualWonders = allCards.normalizeDeckList(withWondersEncoded);
	const isSameWonders = actualWonders === expectedEncoded;
	console.log('isSameWonders?', isSameWonders);
	if (!isSameWonders) {
		console.error('Expected', expectedEncoded);
		console.error('Actual', actualWonders);
		throw new Error('Expected and actual are not the same');
	}

	// Validate Core
	const actualCore = allCards.normalizeDeckList(withCoreEncoded);
	const isSameCore = actualCore === expectedEncoded;
	console.log('isSameCore?', isSameCore);
	if (!isSameCore) {
		console.error('Expected', expectedEncoded);
		console.error('Actual', actualCore);
		throw new Error('Expected and actual are not the same');
	}
};

const testTwist = async () => {
	const allCards = new AllCardsService();
	await allCards.initializeCardsDb();

	const withWonders: DeckDefinition = {
		heroes: [7],
		format: GameFormat.FT_TWIST,
		cards: [
			// Acolyte of Pain Wonders
			[106559, 2],
		],
	};
	const withCore: DeckDefinition = {
		heroes: [7],
		format: GameFormat.FT_TWIST,
		cards: [
			// Acolyte of Pain Core
			[76316, 2],
		],
	};
	const expected: DeckDefinition = {
		heroes: [7],
		format: GameFormat.FT_TWIST,
		cards: [
			// Core
			[76316, 2],
		],
	};
	const withWondersEncoded = encode(withWonders);
	const withCoreEncoded = encode(withCore);
	const expectedEncoded = encode(expected);

	// Validate Wonders
	const actualWonders = allCards.normalizeDeckList(withWondersEncoded);
	const isSameWonders = actualWonders === expectedEncoded;
	console.log('isSameWonders?', isSameWonders);
	if (!isSameWonders) {
		console.error('Expected', expectedEncoded);
		console.error('Actual', actualWonders);
		throw new Error('Expected and actual are not the same');
	}

	// Validate Core
	const actualCore = allCards.normalizeDeckList(withCoreEncoded);
	const isSameCore = actualCore === expectedEncoded;
	console.log('isSameCore?', isSameCore);
	if (!isSameCore) {
		console.error('Expected', expectedEncoded);
		console.error('Actual', actualCore);
		throw new Error('Expected and actual are not the same');
	}
};

const testOther = async () => {
	const allCards = new AllCardsService();
	await allCards.initializeCardsDb();

	const test1 = allCards.getBaseCardIdForDeckbuilding('GIFT_04', GameFormat.FT_STANDARD);
	console.log('root for', 'GIFT_04', 'in standard', test1);
};

const test = async () => {
	await testTwist();
	await testOther();
	await testWild();
	await testStandard();
	await testStandard2();
};

test();
