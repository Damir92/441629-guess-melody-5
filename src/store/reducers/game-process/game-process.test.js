import {gameProcess} from './game-process';
import {ActionType} from '../../action';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(gameProcess(void 0, {})).toEqual({
    mistakes: 0,
    step: 0,
  });
});

it(`Reducer should increment current step by a given value`, () => {
  expect(gameProcess({
    step: 0,
    mistakes: 0,
  }, {
    type: ActionType.INCREMENT_STEP,
  })).toEqual({
    step: 1,
    mistakes: 0,
  });
});

it(`Reducer should increment number of mistakes by a given value`, () => {
  expect(gameProcess({
    step: 0,
    mistakes: 0,
  }, {
    type: ActionType.INCREMENT_MISTAKES,
  })).toEqual({
    step: 0,
    mistakes: 1,
  });
});

it(`Reducer should return default`, () => {
  expect(gameProcess({
    step: 5,
    mistakes: 1,
  }, {
    type: ActionType.RESET_GAME,
  })).toEqual({
    step: 0,
    mistakes: 0,
  });

  expect(gameProcess({
    step: 0,
    mistakes: 0,
  }, {
    type: ActionType.RESET_GAME,
  })).toEqual({
    step: 0,
    mistakes: 0,
  });

  expect(gameProcess({
    step: 2,
    mistakes: 0,
  }, {
    type: ActionType.RESET_GAME,
  })).toEqual({
    step: 0,
    mistakes: 0,
  });
});
