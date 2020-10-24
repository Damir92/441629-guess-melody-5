import {updateObject} from '../utils';
import {ActionType} from './action';
import questions from '../mocks/questions';

const initialState = {
  mistakes: 0,
  step: 0,
  questions,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      return updateObject(state, {
        step: state.step + 1,
      });

    case ActionType.INCREMENT_MISTAKES:
      return updateObject(state, {
        mistakes: state.mistakes + 1,
      });

    case ActionType.RESET_GAME:
      return updateObject({}, initialState);
  }

  return state;
};

export {reducer};
