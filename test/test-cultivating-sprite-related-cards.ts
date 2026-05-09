import cardsData from '../src/cards.json';
import cardsShortData from '../src/cards_short.json';

type CardWithRelations = {
readonly id: string;
readonly relatedCardDbfIds?: readonly number[];
};

const cards: readonly CardWithRelations[] = cardsData;
const cardsShort: readonly CardWithRelations[] = cardsShortData;
const BLOOMING_BULB_DBF_ID = 123854;
const CULTIVATING_SPRITE_ID = 'MEND_100';

const assertHasRelatedCard = (cards: readonly CardWithRelations[], sourceName: string) => {
const card = cards.find((entry) => entry.id === CULTIVATING_SPRITE_ID);
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

assertHasRelatedCard(cards, 'cards.json');
assertHasRelatedCard(cardsShort, 'cards_short.json');
console.log('Cultivating Sprite related cards are present in cards data.');
