import {GameType} from "../const/game-settings";
import {isArtistAnswerCorrect, isGenreAnswerCorrect} from "../game";

export const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET_GAME: `RESET_GAME`,
};

export const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  }),
  resetGame: () => ({
    type: ActionType.RESET_GAME,
  }),
  incrementMistake: ({question, answer}) => {
    let asnwerIsCorrect = false;

    switch (question.type) {
      case GameType.ARTIST:
        asnwerIsCorrect = isArtistAnswerCorrect(question, answer);
        break;

      case GameType.GENRE:
        asnwerIsCorrect = isGenreAnswerCorrect(question, answer);
        break;
    }

    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: asnwerIsCorrect ? 0 : 1,
    };
  },
};
