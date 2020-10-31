import React, {memo} from 'react';
import PropTypes from 'prop-types';

import {Routes} from '../../const/routes';

const WelcomeScreen = ({maxMistakes, history}) => {
  const handlePlayButtonClick = () => {
    history.push(Routes.GAME);
  };

  return (
    <section className="welcome">
      <div className="welcome__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
      </div>
      <button
        className="welcome__button"
        onClick={handlePlayButtonClick}
      >
        <span className="visually-hidden">Начать игру</span>
      </button>
      <h2 className="welcome__rules-title">Правила игры</h2>
      <p className="welcome__text">Правила просты:</p>
      <ul className="welcome__rules-list">
        <li>Нужно ответить на все вопросы.</li>
        <li>Можно допустить { maxMistakes } ошибки.</li>
      </ul>
      <p className="welcome__text">Удачи!</p>
    </section>
  );
};

WelcomeScreen.propTypes = {
  maxMistakes: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
};

export default memo(WelcomeScreen);
