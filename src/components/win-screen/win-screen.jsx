import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {resetGameAction} from '../../store/action';

import {Routes} from '../../const/routes';

const WinScreen = ({history, mistakes, resetGame, step}) => {
  const handleReplayButtonClick = () => {
    history.push(Routes.GAME);
  };

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы ответили правильно на {step - mistakes} вопросов и совершили {mistakes} ошибки</p>
      <button
        className="replay"
        type="button"
        onClick={() => {
          resetGame();
          handleReplayButtonClick();
        }}
      >
        Сыграть ещё раз
      </button>
    </section>
  );
};

WinScreen.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  mistakes: PropTypes.number.isRequired,
  resetGame: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};

const mapStateToProps = ({mistakes, step}) => ({mistakes, step});

const mapDispatchToProps = (dispatch) => ({
  resetGame: () => dispatch(resetGameAction()),
});

export {WinScreen};
export default connect(mapStateToProps, mapDispatchToProps)(WinScreen);
