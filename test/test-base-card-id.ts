import { AllCardsService, GameFormat } from '../src/public-api';

const test = async () => {
	const allCards = new AllCardsService();
	await allCards.initializeCardsDb();

	let card1 = allCards.getBaseCardIdForDeckbuilding('LEG_CS3_031', GameFormat.FT_WILD);
	let card2 = allCards.getBaseCardIdForDeckbuilding('CS3_031', GameFormat.FT_WILD);
	console.log('cards', card1, card2);
	if (card1 !== card2) {
		console.error('Card ids are not the same', card1, card2);
		throw new Error();
	}

	card1 = allCards.getBaseCardIdForDeckbuilding('LEG_CS3_031', GameFormat.FT_STANDARD);
	card2 = allCards.getBaseCardIdForDeckbuilding('CS3_031', GameFormat.FT_STANDARD);
	console.log('cards', card1, card2);
	if (card1 !== card2) {
		console.error('Card ids are not the same', card1, card2);
		throw new Error();
	}

	card1 = allCards.getBaseCardIdForDeckbuilding(113183, GameFormat.FT_STANDARD);
	card2 = allCards.getBaseCardIdForDeckbuilding(66864, GameFormat.FT_STANDARD);
	console.log('cards', card1, card2);
	if (card1 !== card2) {
		console.error('Card ids are not the same', card1, card2);
		throw new Error();
	}

	card1 = allCards.getBaseCardIdForDeckbuilding('TSC_827', GameFormat.FT_STANDARD);
	card2 = allCards.getBaseCardIdForDeckbuilding('CORE_TSC_827', GameFormat.FT_STANDARD);
	console.log('cards', card1, card2);
	if (card1 !== card2) {
		console.error('Card ids are not the same', card1, card2);
		throw new Error();
	}
};

test();
