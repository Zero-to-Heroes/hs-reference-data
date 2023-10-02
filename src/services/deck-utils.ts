import { DeckDefinition, DeckList, decode, encode, Sideboard } from '@firestone-hs/deckstrings';
import { GameFormat, standardSets, twistSets, wildSets } from '../public-api';
import { AllCardsService } from './all-cards.service';

export const normalizeDeckList = (decklist: string, allCards: AllCardsService): string => {
	const decoded: DeckDefinition = decode(decklist);
	const cards: DeckList = decoded.cards.map((pair) => [
		getBaseCardForDeckbuilding(pair[0], decoded.format, allCards),
		pair[1],
	]);
	const sideboards: Sideboard[] = decoded.sideboards?.map((sideboard) =>
		normalizeSideboard(sideboard, decoded.format, allCards),
	);
	const updated: DeckDefinition = {
		...decoded,
		cards: cards,
		sideboards: sideboards,
	};
	return encode(updated);
};

// TODO: add the standard/wild/twist etc distinction
const getBaseCardForDeckbuilding = (dbfId: number, format: GameFormat, allCards: AllCardsService): number => {
	const card = allCards.getCard(dbfId);
	if (!card.deckDuplicateDbfId) {
		return dbfId;
	}

	const originCard = allCards.getCard(card.deckDuplicateDbfId);
	if (!originCard) {
		return dbfId;
	}

	// Now check if the origin card is in the list of sets allowed for the format
	const allowedSets = getAllowedSets(format);
	if (allowedSets.includes(originCard.set?.toLowerCase())) {
		return originCard.dbfId;
	}

	return dbfId;
};

const getAllowedSets = (format: GameFormat): readonly string[] => {
	switch (format) {
		case GameFormat.FT_STANDARD:
			return standardSets;
		case GameFormat.FT_CLASSIC:
			return ['classic'];
		case GameFormat.FT_TWIST:
			return twistSets;
		case GameFormat.FT_WILD:
		default:
			return wildSets;
	}
};

const normalizeSideboard = (sideboard: Sideboard, format: GameFormat, allCards: AllCardsService): Sideboard => {
	const cards: DeckList = sideboard.cards.map((pair) => [
		getBaseCardForDeckbuilding(pair[0], format, allCards),
		pair[1],
	]);
	return {
		...sideboard,
		cards: cards,
	};
};
