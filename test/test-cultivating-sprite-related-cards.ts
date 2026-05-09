import cards from '../src/cards.json';
import cardsShort from '../src/cards_short.json';

const BLOOMING_BULB_DBF_ID = 123854;
const CULTIVATING_SPRITE_ID = 'MEND_100';

const assertHasRelatedCard = (source: readonly any[], sourceName: string) => {
const card = source.find((entry) => entry.id === CULTIVATING_SPRITE_ID);
if (!card) {
throw new Error(`Could not find ${CULTIVATING_SPRITE_ID} in ${sourceName}`);
}

const related = card.relatedCardDbfIds ?? [];
if (!related.includes(BLOOMING_BULB_DBF_ID)) {
throw new Error(
`Expected ${CULTIVATING_SPRITE_ID} in ${sourceName} to include related card dbfId ${BLOOMING_BULB_DBF_ID}, got ${JSON.stringify(related)}`,
);
}
};

assertHasRelatedCard(cards as readonly any[], 'cards.json');
assertHasRelatedCard(cardsShort as readonly any[], 'cards_short.json');
console.log('Cultivating Sprite related cards are present in cards data.');
