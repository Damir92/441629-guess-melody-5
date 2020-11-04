import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Routes} from '../../const/routes';

import {WinScreen} from './win-screen';

configure({adapter: new Adapter()});

it(`Should replay button be pressed and change url`, () => {
  const handleHistoryChange = jest.fn((value) => value);

  const history = {
    push: handleHistoryChange,
  };

  const handleButtonClick = jest.fn();

  const screen = shallow(
      <WinScreen
        history={history}
        mistakes={1}
        resetGame={handleButtonClick}
        step={1}
      />
  );

  screen.find(`button.replay`).simulate(`click`);

  expect(handleButtonClick).toHaveBeenCalledTimes(1);
  expect(handleHistoryChange.mock.calls[0][0]).toBe(Routes.GAME);
});
