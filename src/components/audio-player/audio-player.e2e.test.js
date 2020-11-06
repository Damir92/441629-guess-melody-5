import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AudioPlayer from './audio-player';

configure({adapter: new Adapter()});

it(`Click by Play button calls callback`, () => {
  const handleButtonClick = jest.fn();

  const wrapper = shallow(
      <AudioPlayer
        isLoading={false}
        isPlaying={false}
        onPlayButtonClick={handleButtonClick}
      >
        <audio />
      </AudioPlayer>
  );

  wrapper.find(`.track__button`).simulate(`click`);

  expect(handleButtonClick).toHaveBeenCalledTimes(1);
});
