import React, {useState} from 'react';

import Player from '../../components/audio-player/audio-player';

import withAudio from "../with-audio/with-audio";

const AudioPlayer = withAudio(Player);

const withActivePlayer = (Component) => {
  const WithActivePlayer = (props) => {
    const [activePlayer, setActivePlayer] = useState(0);

    const handleButtonClick = (index) => {
      setActivePlayer((prev) => prev === index ? null : index);
    };

    return (
      <Component
        {...props}
        renderPlayer={(src, index) => {
          return (
            <AudioPlayer
              src={src}
              isPlaying={index === activePlayer}
              onPlayButtonClick={() => {
                handleButtonClick(index);
              }}
            />
          );
        }}
      />
    );
  };

  return WithActivePlayer;
};

export default withActivePlayer;
