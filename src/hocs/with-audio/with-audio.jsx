import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const withAudio = (Component) => {
  const WithAudio = (props) => {
    const {
      isPlaying,
      src,
    } = props;

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

    useEffect(() => {
      setPlaying(isPlaying);
    }, [isPlaying]);

    return (
      <Component
        {...props}
        isLoading={loading}
      >
        <audio
          ref={audioRef}
        />
      </Component>
    );
  };

  WithAudio.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
  };

  return WithAudio;
};

export default withAudio;
