export const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET_GAME: `RESET_GAME`,
};

export const incrementStepAction = () => ({
  type: ActionType.INCREMENT_STEP,
});

export const resetGameAction = () => ({
  type: ActionType.RESET_GAME,
});

export const incrementMistakeAction = () => ({
  type: ActionType.INCREMENT_MISTAKES,
});
