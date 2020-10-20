import React from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../store/action';

import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
import Mistakes from '../mistakes/mistakes';

import {genreQuestionPropTypes, artistQuestionPropTypes} from '../../prop-types';

import {GameType} from '../../const/game-settings';

const GameScreen = (props) => {
  const {
    questions = [],
    step,
    onUserAnswer,
    resetGame,
    mistakes,
  } = props;

  const question = questions[step] || {};

  if (!questions.length || !question) {
    resetGame();

    return (
      <Redirect to="/" />
    );
  }

  switch (question.type) {
    case GameType.ARTIST:
      return (
        <ArtistQuestionScreen
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes}/>
        </ArtistQuestionScreen>
      );
    case GameType.GENRE:
      return (
        <GenreQuestionScreen
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes}/>
        </GenreQuestionScreen>
      );
  }

  return <Redirect to="/" />;
};

GameScreen.propTypes = {
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape(artistQuestionPropTypes).isRequired,
        PropTypes.shape(genreQuestionPropTypes).isRequired,
      ]).isRequired
  ).isRequired,
  step: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step,
  mistakes: state.mistakes,
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  onUserAnswer(stepAnswer) {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(stepAnswer));
  },
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
});

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
