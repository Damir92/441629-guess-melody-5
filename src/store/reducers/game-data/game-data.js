import {updateObject} from '../../../utils';
import {ActionType} from '../../action';

const initialState = {
  questions: [],
};

const gameData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_QUESTIONS:
      return updateObject(state, {
        questions: action.payload,
      });
  }

  return state;
};

export {gameData};
