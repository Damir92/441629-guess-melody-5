import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {GameOverScreen} from './game-over-screen';

const history = {
  push: () => {},
};

configure({adapter: new Adapter()});

it(`Should replay button be pressed`, () => {
  const handleResetAction = jest.fn();

  const wrapper = shallow(
      <GameOverScreen
        history={history}
        resetGame={handleResetAction}
      />
  );

  wrapper.find(`button.replay`).simulate(`click`);

  expect(handleResetAction).toHaveBeenCalledTimes(1);
});
