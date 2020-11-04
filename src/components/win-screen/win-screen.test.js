import React from 'react';
import renderer from 'react-test-renderer';

import {WinScreen} from './win-screen';

const history = {
  push: () => {},
};

const noop = () => {};

describe(`WinScreen rendered correctly`, () => {
  describe(`With 3 questions`, () => {
    it(`With 0 mistake`, () => {
      const tree = renderer
        .create(<WinScreen
          history={history}
          mistakes={0}
          step={3}
          resetGame={noop}
        />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`With 1 mistake`, () => {
      const tree = renderer
        .create(<WinScreen
          history={history}
          mistakes={1}
          step={3}
          resetGame={noop}
        />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe(`With 2 questions`, () => {
    it(`With 0 mistake`, () => {
      const tree = renderer
        .create(<WinScreen
          history={history}
          mistakes={0}
          step={2}
          resetGame={noop}
        />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`With 1 mistake`, () => {
      const tree = renderer
        .create(<WinScreen
          history={history}
          mistakes={1}
          step={2}
          resetGame={noop}
        />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
