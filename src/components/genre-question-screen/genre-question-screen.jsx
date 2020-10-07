import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {genreQuestionPropTypes} from '../../prop-types';

const GenreQuestionScreen = ({onAnswer, question}) => {

  const {
    answers,
    genre,
  } = question;

  const [userAnswers, setUserAnswers] = useState(answers.reduce((res, _, index) => {
    res[index] = false;
    return res;
  }, {}));

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onAnswer({
      question,
      userAnswers,
    });
  };

  const handleInputChange = (evt, i) => {
    const value = evt.target.checked;

    setUserAnswers((prevUserAnswers) => {
      const currUserAnswers = Object.assign({}, prevUserAnswers);
      currUserAnswers[i] = value;
      return currUserAnswers;
    });
  };

  return (
    <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
        </svg>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={handleFormSubmit}
        >
          {answers.map((answer, i) => (
            <div
              key={`${i}-${answer.src}`}
              className="track"
            >
              <button className="track__button track__button--play" type="button"></button>
              <div className="track__status">
                <audio
                  src={answer.src}
                />
              </div>
              <div className="game__answer">
                <input
                  className="game__input visually-hidden" type="checkbox"
                  name="answer"
                  value={`answer-${i}`}
                  id={`answer-${i}`}
                  checked={userAnswers[i]}
                  onChange={(evt) => {
                    handleInputChange(evt, i);
                  }}
                />
                <label
                  className="game__check"
                  htmlFor={`answer-${i}`}
                >
                  Отметить
                </label>
              </div>
            </div>
          ))}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>
  );
};

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape(genreQuestionPropTypes).isRequired,
};

export default GenreQuestionScreen;
