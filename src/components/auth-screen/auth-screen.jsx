import React, {useRef} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {resetGameAction} from '../../store/action';
import {login} from '../../store/api-actions';
import {Routes} from '../../const/routes';

const AuthScreen = ({history, onSubmit, resetGame}) => {
  const loginRef = useRef(null);
  const passwordRef = useRef(null);

  const handleReplayButtonClick = () => {
    history.push(Routes.GAME);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <section className="login">
      <div className="login__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <h2 className="login__title">Вы настоящий меломан!</h2>
      <p className="login__text">Хотите узнать свой результат? Представтесь!</p>
      <form
        className="login__form"
        action=""
        onSubmit={handleSubmit}
      >
        <p className="login__field">
          <label className="login__label" forhtml="name">Логин</label>
          <input
            className="login__input"
            type="text"
            name="name"
            id="name"
            ref={loginRef}
          />
        </p>
        <p className="login__field">
          <label className="login__label" forhtml="password">Пароль</label>
          <input
            className="login__input"
            type="text"
            name="password"
            id="password"
            ref={passwordRef}
          />
          <span className="login__error">Неверный пароль</span>
        </p>
        <button className="login__button button" type="submit">Войти</button>
      </form>
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

AuthScreen.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (authData) => dispatch(login(authData)),
  resetGame: () => dispatch(resetGameAction()),
});

export {AuthScreen};
export default connect(null, mapDispatchToProps)(AuthScreen);
