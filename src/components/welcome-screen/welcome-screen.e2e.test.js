import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Routes} from '../../const/routes';

import WelcomeScreen from './welcome-screen';

configure({adapter: new Adapter()});

it(`Should welcome button be pressed and rewrite history`, () => {
  const handleHistoryChange = jest.fn((value) => value);

  const history = {
    push: handleHistoryChange,
  };

  const screen = shallow(
      <WelcomeScreen
        history={history}
        maxMistakes={3}
      />
  );

  screen.find(`.welcome__button`).simulate(`click`);

  expect(handleHistoryChange).toHaveBeenCalledTimes(1);
  expect(handleHistoryChange.mock.calls[0][0]).toBe(Routes.GAME);
});
