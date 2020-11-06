import React from 'react';
import renderer from 'react-test-renderer';

import WelcomeScreen from './welcome-screen';

const history = {
  push: () => {},
};

it(`WelcomeScreen was render correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      maxMistakes={3}
      history={history}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
