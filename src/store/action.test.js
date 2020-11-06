import {
  incrementStepAction,
  incrementMistakeAction,
  loadQuestions,
  resetGameAction,
  requireAuthorization,
  redirectToRoute,
  ActionType,
} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing step returns correct action`, () => {
    expect(incrementStepAction()).toEqual({
      type: ActionType.INCREMENT_STEP,
    });
  });

  it(`Action creator for incrementing mistake returns correct action`, () => {
    expect(incrementMistakeAction()).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
    });
  });

  it(`Action creator for reset game returns action without payload`, () => {
    expect(resetGameAction()).toEqual({
      type: ActionType.RESET_GAME,
    });
  });

  it(`Action creator for load questions returns action questions payload`, () => {
    expect(loadQuestions([{}, {}, {}])).toEqual({
      type: ActionType.LOAD_QUESTIONS,
      payload: [{}, {}, {}],
    });
  });

  it(`Action creator for require authorization returns action AUTH payload`, () => {
    expect(requireAuthorization(`AUTH`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`,
    });
  });

  it(`Action creator for redirect returns action with url payload`, () => {
    expect(redirectToRoute(`testURL`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `testURL`,
    });
  });
});
