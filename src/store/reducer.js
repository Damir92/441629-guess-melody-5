import {updateObject} from '../utils';
import {ActionType} from './action';
import questions from '../mocks/questions';
import {GameSettings} from '../const/game-settings';

const initialState = {
  mistakes: 0,
  step: 0,
  questions,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      const nextStep = state.step + 1;

      return updateObject(state, {
        step: nextStep,
      });

    case ActionType.INCREMENT_MISTAKES:
      const mistakes = state.mistakes + 1;

      if (mistakes >= GameSettings.MAX_MISTAKES) {
        return updateObject({}, initialState);
      }

      return updateObject(state, {
        mistakes,
      });

    case ActionType.RESET_GAME:
      return updateObject({}, initialState);
  }

  return state;
};

export {reducer};
