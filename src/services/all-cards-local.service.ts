import { AllCardsService } from './all-cards.service';

export class AllCardsLocalService extends AllCardsService {
	constructor(private readonly cardsStr: string) {
		super();
	}

	protected getCardsStr(url: string): Promise<string> {
		return new Promise<string>((resolve, reject) => {
			resolve(this.cardsStr);
		});
	}
}
