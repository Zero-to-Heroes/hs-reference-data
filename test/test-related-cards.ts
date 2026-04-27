import cards from '../src/cards.json';
import { CardIds, RELATED_CARDS_DATA } from '../src/public-api';

const test = () => {
	const expected = [CardIds.PortalKeeper_FelhoundPortalToken, CardIds.PortalKeeper_FelhoundToken];
	const actual = RELATED_CARDS_DATA[CardIds.PortalOverfiend];
	if (JSON.stringify(actual) !== JSON.stringify(expected)) {
		console.error('Expected', expected);
		console.error('Actual', actual);
		throw new Error('Portal Overfiend related cards are incorrect');
	}

	const allCardIds = new Set(cards.map((card) => card.id));
	for (const relatedCardId of actual as readonly string[]) {
		if (!allCardIds.has(relatedCardId)) {
			throw new Error(`Missing related card in local cards data: ${relatedCardId}`);
		}
	}
};

test();
