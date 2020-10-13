import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const AudioPlayer = ({isPlaying, src, onPlayButtonClick}) => {
  const [loading, setLoading] = useState(true);

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    audio.src = src;

    audio.oncanplaythrough = () => setLoading(false);

    return () => {
      audioRef.current.oncanplaythrough = null;
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  });

  return (
    <>
      <button
        className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        type="button"
        disabled={loading}
        onClick={onPlayButtonClick}
      />
      <div
        className="track__status"
      >
        <audio
          autoPlay={isPlaying}
          ref={audioRef}
        />
      </div>
    </>
  );
};

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

export default AudioPlayer;
