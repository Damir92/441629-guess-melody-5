import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import AuthScreen from '../auth-screen/auth-screen';
import GameScreen from '../game-screen/game-screen';
import GameOverScreen from '../game-over-screen/game-over-screen';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import WinScreen from '../win-screen/win-screen';

import {GameSettings} from '../../const/game-settings';
import {Routes} from '../../const/routes';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route
          exact
          path={Routes.MAIN}
          render={({history}) => (
            <WelcomeScreen
              maxMistakes={GameSettings.MAX_MISTAKES}
              history={history}
            />
          )}
        />

        <Route path={Routes.GAME}>
          <GameScreen />
        </Route>

        <Route path={Routes.LOGIN}>
          <AuthScreen />
        </Route>

        <Route path={Routes.RESULT} component={WinScreen}/>

        <Route path={Routes.LOSE} component={GameOverScreen}/>

      </Switch>
    </BrowserRouter>
  );
};

export default App;
