import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';

import {genreQuestionPropTypes, artistQuestionPropTypes} from '../../prop-types';

import {GameType} from '../../const/game-settings';

const GameScreen = ({questions}) => {
  const [step, setStep] = useState(0);

  if (!questions || step >= questions.length || !questions[step]) {
    return (
      <Redirect to="/" />
    );
  }

  const question = questions[step];

  const incrementStep = () => {
    setStep((prevStep) => (prevStep + 1));
  };

  switch (question.type) {
    case GameType.ARTIST:
      return (
        <ArtistQuestionScreen
          question={question}
          onAnswer={() => {
            incrementStep();
          }}
        />
      );
    case GameType.GENRE:
      return (
        <GenreQuestionScreen
          question={question}
          onAnswer={() => {
            incrementStep();
          }}
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

export default GameScreen;
