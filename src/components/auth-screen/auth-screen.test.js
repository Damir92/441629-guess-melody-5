import React from 'react';
import renderer from 'react-test-renderer';

import {AuthScreen} from './auth-screen';

const history = {
  push: () => {},
};

const noop = () => {};

it(`AuthScreen was render correctly`, () => {
  const tree = renderer
    .create(<AuthScreen
      history={history}
      onSubmit={noop}
      resetGame={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
