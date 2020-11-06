import React, {Fragment} from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';

import withAudio from './with-audio';

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

const MockComponentWrapped = withAudio(MockComponent);

it(`withAudio rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      isPlaying={false}
      src={``}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
