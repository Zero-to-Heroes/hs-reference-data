import { GameFormat } from '../../public-api';
import { GameFormatString } from '../enums/game-format';

export const formatFormat = (format: GameFormat): GameFormatString => {
	switch (format) {
		case GameFormat.FT_STANDARD:
			return 'standard';
		case GameFormat.FT_CLASSIC:
			return 'classic';
		case GameFormat.FT_WILD:
		default:
			return 'wild';
	}
};
