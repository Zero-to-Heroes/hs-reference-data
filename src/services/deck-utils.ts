import { DeckDefinition, DeckList, decode, encode, Sideboard } from '@firestone-hs/deckstrings';
import { AllCardsService } from './all-cards.service';

export const normalizeDeckList = (decklist: string, allCards: AllCardsService): string => {
	const decoded: DeckDefinition = decode(decklist);
	const cards: DeckList = decoded.cards.map((pair) => [getBaseCardForDeckbuilding(pair[0], allCards), pair[1]]);
	const sideboards: Sideboard[] = decoded.sideboards?.map((sideboard) => normalizeSideboard(sideboard, allCards));
	const updated: DeckDefinition = {
		...decoded,
		cards: cards,
		sideboards: sideboards,
	};
	return encode(updated);
};

const getBaseCardForDeckbuilding = (dbfId: number, allCards: AllCardsService): number => {
	const card = allCards.getCard(dbfId);
	return card.deckDuplicateDbfId ? allCards.getCard(card.deckDuplicateDbfId).dbfId || dbfId : dbfId;
};

const normalizeSideboard = (sideboard: Sideboard, allCards: AllCardsService): Sideboard => {
	const cards: DeckList = sideboard.cards.map((pair) => [getBaseCardForDeckbuilding(pair[0], allCards), pair[1]]);
	return {
		...sideboard,
		cards: cards,
	};
};
