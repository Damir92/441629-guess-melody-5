import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';

import {genreQuestionPropTypes, artistQuestionPropTypes} from '../../prop-types';

import {GameType} from '../../const/game-settings';

const GameScreen = ({questions = [], step, onUserAnswer, resetGame}) => {
  // const [step, setStep] = useState(0);

  const question = questions[step] || {};

  if (!questions.length || !question) {
    resetGame();

    return (
      <Redirect to="/" />
    );
  }

  // const incrementStep = () => {
  //   setStep((prevStep) => (prevStep + 1));
  // };

  switch (question.type) {
    case GameType.ARTIST:
      return (
        <ArtistQuestionScreen
          question={question}
          // onAnswer={() => {
          //   incrementStep();
          // }}
          onAnswer={onUserAnswer}
        />
      );
    case GameType.GENRE:
      return (
        <GenreQuestionScreen
          question={question}
          // onAnswer={() => {
          //   incrementStep();
          // }}
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
};

const mapStateToProps = (state) => ({
  step: state.step,
});

const mapDispatchToProps = (dispatch) => ({
  onUserAnswer() {
    dispatch(ActionCreator.incrementStep());
  },
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
});

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
