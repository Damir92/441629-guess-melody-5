import {combineReducers} from 'redux';
import {gameData} from './reducers/game-data/game-data';
import {gameProcess} from './reducers/game-process/game-process';

export const NameSpace = {
  STORE_QUESTIONS: `STORE_QUESTIONS`,
  STORE_GAME: `STORE_GAME`,
};

export default combineReducers({
  [NameSpace.STORE_QUESTIONS]: gameData,
  [NameSpace.STORE_GAME]: gameProcess,
});
