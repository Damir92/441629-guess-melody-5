import React from 'react';
import ReactDOM from 'react-dom';

import {GameSettings} from './const/game-settings';
import questions from './mocks/questions';

import App from './components/app/app';

ReactDOM.render(
    <App
      errorsCount={ GameSettings.ERRORS_COUNT }
      questions={ questions }
    />,
    document.querySelector(`#root`)
);
