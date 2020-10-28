import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';

import AuthScreen from '../auth-screen/auth-screen';
import GameScreen from '../game-screen/game-screen';
import GameOverScreen from '../game-over-screen/game-over-screen';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import WinScreen from '../win-screen/win-screen';
import PrivateRoute from '../private-route/private-route';

import browserHistory from '../../browser-history';

import {GameSettings} from '../../const/game-settings';
import {Routes} from '../../const/routes';

const App = () => {
  return (
    <Router history={browserHistory}>
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

        <Route path={Routes.LOGIN} component={AuthScreen}/>

        <PrivateRoute
          path={`/result`}
          render={({history}) => {
            return (
              <WinScreen
                history={history}
              />
            );
          }}
        />

        <Route path={Routes.LOSE} component={GameOverScreen}/>

      </Switch>
    </Router>
  );
};

export default App;
