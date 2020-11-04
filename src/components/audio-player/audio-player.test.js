import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from './audio-player';

const noop = () => {};

it(`AudioPlayer rendered correctly`, () => {
  const tree = renderer
    .create(<AudioPlayer
      isLoading={true}
      isPlaying={false}
      onPlayButtonClick={noop}
    >
      <audio />
    </AudioPlayer>, {
      createNodeMock: () => ({})
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
