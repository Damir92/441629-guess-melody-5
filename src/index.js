import React from 'react';
import ReactDOM from 'react-dom';

import {GAME_SETTINGS} from './const/game-settings';

import App from './components/app/app';

ReactDOM.render(
    <App
      errorsCount={ GAME_SETTINGS.ERRORS_COUNT }
    />,
    document.querySelector(`#root`)
);
