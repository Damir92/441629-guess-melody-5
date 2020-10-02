import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import AuthScreen from '../auth-screen/auth-screen';
import GameOverScreen from '../game-over-screen/game-over-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import WinScreen from '../win-screen/win-screen';

import {Routes} from '../../const/routes';

const App = ({errorsCount}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.MAIN}>
          <WelcomeScreen errorsCount={errorsCount} />
        </Route>
        <Route path={Routes.ARTIST}>
          <ArtistQuestionScreen />
        </Route>
        <Route path={Routes.GENRE}>
          <GenreQuestionScreen />
        </Route>
        <Route path={Routes.LOGIN}>
          <AuthScreen />
        </Route>
        <Route path={Routes.RESULT}>
          <WinScreen />
        </Route>
        <Route path={Routes.LOSE}>
          <GameOverScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
