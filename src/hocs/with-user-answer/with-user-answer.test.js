import React, {Fragment} from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';

import withUserAnswer from './with-user-answer';

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `audioURL`,
    genre: `rock`,
  }, {
    src: `audioURL`,
    genre: `blues`,
  }, {
    src: `audioURL`,
    genre: `jazz`,
  }, {
    src: `audioURL`,
    genre: `rock`,
  }],
};

const noop = () => {};

const MockComponent = (props) => {
  const {children} = props;

  return (
    <Fragment>
      {children}
    </Fragment>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withUserAnswer(MockComponent);

it(`withUserAnswer rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      question={question}
      onAnswer={noop}
    >
      <Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
