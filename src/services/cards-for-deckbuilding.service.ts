import { DeckDefinition, DeckList, Sideboard, decode, encode } from '@firestone-hs/deckstrings';
import { GameFormat, ReferenceCard, duelsSets, formatFormat, standardSets, twistSets, wildSets } from '../public-api';
import { AllCardsService } from './all-cards.service';

interface Duplicates {
	[format: string]: DuplicatesForFormat;
}
interface DuplicatesForFormat {
	[dbfId: string]: ReferenceCard;
}

export class CardsForDeckbuildingService {
	private duplicatesForDeckbuilding: Duplicates = null;

	public init(allCards: AllCardsService) {
		const allSetsDuplicates: {
			[dbfId: string]: ReferenceCard[];
		} = {};
		for (const card of allCards.getCards()) {
			if (card.deckDuplicateDbfId) {
				if (!allSetsDuplicates[card.deckDuplicateDbfId]) {
					allSetsDuplicates[card.deckDuplicateDbfId] = [];
				}
				allSetsDuplicates[card.deckDuplicateDbfId].push(card);
			} else {
				if (!allSetsDuplicates[card.dbfId]) {
					allSetsDuplicates[card.dbfId] = [];
				}
				allSetsDuplicates[card.dbfId].push(card);
			}
		}
		// Order all the cards by their dbfid
		for (const dbfId of Object.keys(allSetsDuplicates)) {
			allSetsDuplicates[dbfId] = allSetsDuplicates[dbfId].sort((a, b) => a.dbfId - b.dbfId);
		}

		const formats: readonly ('standard' | 'wild' | 'twist' | 'classic' | 'duels')[] = [
			'standard',
			'wild',
			'twist',
			'duels',
		];
		const result: Duplicates = {};
		for (const format of formats) {
			result[format] = {};
			const allowedSets = this.getAllowedSets(format);
			for (const dbfId of Object.keys(allSetsDuplicates)) {
				const cards = allSetsDuplicates[dbfId];
				const card = cards.find((card) => allowedSets.includes(card.set?.toLowerCase()));
				if (card) {
					result[format][dbfId] = card;
				}
			}
		}
		this.duplicatesForDeckbuilding = result;
	}

	public normalizeDeckList(decklist: string, allCards: AllCardsService): string {
		const decoded: DeckDefinition = decode(decklist);
		const cards: DeckList = decoded.cards.map((pair) => [
			this.getBaseCardDbfIdForDeckbuilding(pair[0], decoded.format, allCards),
			pair[1],
		]);
		const sideboards: Sideboard[] = decoded.sideboards?.map((sideboard) =>
			this.normalizeSideboard(sideboard, decoded.format, allCards),
		);
		const updated: DeckDefinition = {
			...decoded,
			cards: cards,
			sideboards: sideboards,
		};
		return encode(updated);
	}

	public normalizeSideboard(sideboard: Sideboard, format: GameFormat, allCards: AllCardsService): Sideboard {
		const cards: DeckList = sideboard.cards.map((pair) => [
			this.getBaseCardDbfIdForDeckbuilding(pair[0], format, allCards),
			pair[1],
		]);
		return {
			...sideboard,
			cards: cards,
		};
	}

	public getBaseCardDbfIdForDeckbuilding(
		cardIdOrDbfId: number | string,
		format: GameFormat,
		allCards: AllCardsService,
	): number {
		const refCard = allCards.getCard(cardIdOrDbfId);
		const deckDbfId = refCard.deckDuplicateDbfId ?? refCard.dbfId;
		return this.duplicatesForDeckbuilding[formatFormat(format)][deckDbfId]?.dbfId ?? refCard.dbfId;
	}

	public getBaseCardIdForDeckbuilding(
		cardIdOrDbfId: number | string,
		format: GameFormat,
		allCards: AllCardsService,
	): string {
		const refCard = allCards.getCard(cardIdOrDbfId);
		const deckDbfId = refCard.deckDuplicateDbfId ?? refCard.dbfId;
		return this.duplicatesForDeckbuilding[formatFormat(format)][deckDbfId]?.id ?? refCard.id;
	}

	private getAllowedSets(format: 'standard' | 'wild' | 'twist' | 'classic' | 'duels'): readonly string[] {
		switch (format) {
			case 'standard':
				return standardSets;
			case 'classic':
				return ['classic'];
			case 'twist':
				return twistSets;
			case 'duels':
				return duelsSets;
			case 'wild':
			default:
				return wildSets;
		}
	}
}
