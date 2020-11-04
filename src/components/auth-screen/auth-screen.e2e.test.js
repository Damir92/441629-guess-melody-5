import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {AuthScreen} from './auth-screen';

configure({adapter: new Adapter()});

const noop = () => {};

const history = {
  push: () => {},
};

it(`Should replay button be pressed`, () => {
  const handleButtonClick = jest.fn();

  const wrapper = shallow(
      <AuthScreen
        history={history}
        onSubmit={noop}
        resetGame={handleButtonClick}
      >
        <audio />
      </AuthScreen>
  );

  wrapper.find(`button.replay`).simulate(`click`);

  expect(handleButtonClick).toHaveBeenCalledTimes(1);
});
