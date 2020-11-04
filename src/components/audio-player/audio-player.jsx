import React from 'react';
import PropTypes from 'prop-types';

const AudioPlayer = ({isLoading, isPlaying, onPlayButtonClick, children}) => {
  return (
    <>
      <button
        className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        type="button"
        disabled={isLoading}
        onClick={onPlayButtonClick}
      />
      <div
        className="track__status"
      >
        {children}
      </div>
    </>
  );
};

AudioPlayer.propTypes = {
  children: PropTypes.element.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default AudioPlayer;
