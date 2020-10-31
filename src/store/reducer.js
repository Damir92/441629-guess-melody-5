import {combineReducers} from 'redux';
import {gameData} from './reducers/game-data/game-data';
import {gameProcess} from './reducers/game-process/game-process';
import {user} from './reducers/user/user';

export const NameSpace = {
  STORE_QUESTIONS: `STORE_QUESTIONS`,
  STORE_GAME: `STORE_GAME`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.STORE_QUESTIONS]: gameData,
  [NameSpace.STORE_GAME]: gameProcess,
  [NameSpace.USER]: user,
});
