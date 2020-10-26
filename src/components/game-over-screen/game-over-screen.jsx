import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {resetGameAction} from '../../store/action';

import {Routes} from '../../const/routes';

const GameOverScreen = ({resetGame, history}) => {
  const handleReplayButtonClick = () => {
    history.push(Routes.GAME);
  };

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <h2 className="result__title">Какая жалость!</h2>
      <p className="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
      <button
        className="replay"
        type="button"
        onClick={() => {
          resetGame();
          handleReplayButtonClick();
        }}
      >
        Попробовать ещё раз
      </button>
    </section>
  );
};

GameOverScreen.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  resetGame: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  resetGame: () => dispatch(resetGameAction()),
});

export {GameOverScreen};
export default connect(null, mapDispatchToProps)(GameOverScreen);
