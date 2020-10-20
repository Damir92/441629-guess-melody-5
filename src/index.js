import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {reducer} from './store/reducer';

import {GameSettings} from './const/game-settings';
import questions from './mocks/questions';

import App from './components/app/app';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
);

ReactDOM.render(
    <Provider store={store}>
      <App
        errorsCount={GameSettings.ERRORS_COUNT}
        questions={questions}
      />
    </Provider>,
    document.querySelector(`#root`)
);
