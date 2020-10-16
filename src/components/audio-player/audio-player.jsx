import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const AudioPlayer = ({isPlaying, src, onPlayButtonClick}) => {
  const [playing, setPlaying] = useState(isPlaying);
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
    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  const handleButtonClick = () => {
    setPlaying((prev) => !prev);
    onPlayButtonClick();
  };

  return (
    <>
      <button
        className={`track__button track__button--${playing ? `pause` : `play`}`}
        type="button"
        disabled={loading}
        onClick={handleButtonClick}
      />
      <div
        className="track__status"
      >
        <audio
          autoPlay={playing}
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
