import React from 'react';
import renderer from 'react-test-renderer';

import {GameOverScreen} from './game-over-screen';

const history = {
  push: () => {},
};

const noop = () => {};

it(`GameOverScreen was render correctly`, () => {
  const tree = renderer
    .create(<GameOverScreen
      history={history}
      resetGame={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
