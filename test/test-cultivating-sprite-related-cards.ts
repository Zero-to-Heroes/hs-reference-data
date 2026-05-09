import cards from '../src/cards.json';
import cardsShort from '../src/cards_short.json';

const EXPECTED_RELATED_DBF_ID = 123854;
const CARD_ID = 'MEND_100';

const assertRelatedCard = (source: readonly any[], sourceName: string) => {
const card = source.find((entry) => entry.id === CARD_ID);
if (!card) {
throw new Error(`Could not find ${CARD_ID} in ${sourceName}`);
}

const related = card.relatedCardDbfIds ?? [];
if (!related.includes(EXPECTED_RELATED_DBF_ID)) {
throw new Error(
`Expected ${CARD_ID} in ${sourceName} to include related card dbfId ${EXPECTED_RELATED_DBF_ID}, got ${JSON.stringify(related)}`,
);
}
}

assertRelatedCard(cards as readonly any[], 'cards.json');
assertRelatedCard(cardsShort as readonly any[], 'cards_short.json');
console.log('Cultivating Sprite related cards are present in cards data.');
