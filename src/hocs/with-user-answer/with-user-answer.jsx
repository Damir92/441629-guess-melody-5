import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {genreQuestionPropTypes} from '../../prop-types';

const withUserAnswer = (Component) => {
  const WithUserAnswer = (props) => {
    const {
      onAnswer,
      question,
    } = props;

    const [userAnswers, setUserAnswers] = useState({});

    const handleInputChange = (evt, i) => {
      const value = evt.target.checked;

      setUserAnswers((prevUserAnswers) => {
        const currUserAnswers = Object.assign({}, prevUserAnswers);
        currUserAnswers[i] = value;
        return currUserAnswers;
      });
    };

    const handleFormSubmit = (evt) => {
      evt.preventDefault();
      onAnswer({
        question,
        answer: userAnswers,
      });
    };

    return (
      <Component
        {...props}
        userAnswers={userAnswers}
        onAnswer={handleFormSubmit}
        onChange={handleInputChange}
      />
    );
  };

  WithUserAnswer.propTypes = {
    onAnswer: PropTypes.func.isRequired,
    question: PropTypes.shape(genreQuestionPropTypes).isRequired,
  };

  return WithUserAnswer;
};

export default withUserAnswer;
