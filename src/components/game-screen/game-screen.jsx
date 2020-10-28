import React from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {incrementMistakeAction, incrementStepAction, resetGameAction} from '../../store/action';

import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';

import withActivePlayer from '../../hocs/with-active-player/with-active-player';
import withUserAnswer from '../../hocs/with-user-answer/with-user-answer';

import {genreQuestionPropTypes, artistQuestionPropTypes} from '../../prop-types';

import {GameType, GameSettings} from '../../const/game-settings';
import {isArtistAnswerCorrect, isGenreAnswerCorrect} from '../../game';
import {Routes} from '../../const/routes';

const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);
const GenreQuestionScreenWrapped = withActivePlayer(withUserAnswer(GenreQuestionScreen));

const GameScreen = (props) => {
  const {
    questions = [],
    step,
    onUserAnswer,
    resetGame,
    mistakes,
  } = props;

  const question = questions[step] || {};

  if (!questions.length) {
    resetGame();

    return (
      <Redirect to={Routes.MAIN} />
    );
  }

  if (mistakes >= GameSettings.MAX_MISTAKES) {
    return (
      <Redirect to={Routes.LOSE} />
    );
  }

  if (step >= questions.length || !question) {
    return (
      <Redirect to={Routes.RESULT} />
    );
  }

  switch (question.type) {
    case GameType.ARTIST:
      return (
        <ArtistQuestionScreenWrapped
          key={step}
          question={question}
          mistakes={mistakes}
          onAnswer={onUserAnswer}
        />
      );
    case GameType.GENRE:
      return (
        <GenreQuestionScreenWrapped
          key={step}
          question={question}
          mistakes={mistakes}
          onAnswer={onUserAnswer}
        />
      );
  }

  return <Redirect to={Routes.MAIN} />;
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

const mapStateToProps = ({STORE_QUESTIONS, STORE_GAME}) => ({
  step: STORE_GAME.step,
  mistakes: STORE_GAME.mistakes,
  questions: STORE_QUESTIONS.questions,
});

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

    dispatch(incrementStepAction());
    if (!asnwerIsCorrect) {
      dispatch(incrementMistakeAction());
    }
  },
  resetGame: () => dispatch(resetGameAction()),
});

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
