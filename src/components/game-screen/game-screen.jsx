import React from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../store/action';

import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';

import {genreQuestionPropTypes, artistQuestionPropTypes} from '../../prop-types';

import {GameType} from '../../const/game-settings';
import {isArtistAnswerCorrect, isGenreAnswerCorrect} from '../../game';

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
          mistakes={mistakes}
          onAnswer={onUserAnswer}
        />
      );
    case GameType.GENRE:
      return (
        <GenreQuestionScreen
          question={question}
          mistakes={mistakes}
          onAnswer={onUserAnswer}
        />
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

const mapStateToProps = ({step, mistakes, questions}) => ({step, mistakes, questions});

const mapDispatchToProps = (dispatch) => ({
  onUserAnswer: ({question, answer}) => {
    let asnwerIsCorrect = false;

    switch (question.type) {
      case GameType.ARTIST:
        asnwerIsCorrect = isArtistAnswerCorrect(question, answer);
        break;

      case GameType.GENRE:
        asnwerIsCorrect = isGenreAnswerCorrect(question, answer);
        break;
    }

    dispatch(ActionCreator.incrementStep());
    if (!asnwerIsCorrect) {
      dispatch(ActionCreator.incrementMistake());
    }
  },
  resetGame: () => dispatch(ActionCreator.resetGame()),
});

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
