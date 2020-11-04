import React, {Fragment} from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';

import withActivePlayer from './with-active-player';

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

const MockComponentWrapped = withActivePlayer(MockComponent);

it(`withActivePlayer rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped>
      <Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
