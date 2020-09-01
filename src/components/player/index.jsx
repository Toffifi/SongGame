import React, { useEffect, useRef } from 'react';
import './style.scss';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import PropTypes from 'prop-types';

const Player = ({ playingItem }) => {
  const player = useRef(null);
  useEffect(() => {
    player.current.audio.current.pause();
  });

  return (
    <div className="player">
      <AudioPlayer
        ref={player}
        autoPlay={false}
        showJumpControls={false}
        customProgressBarSection={
                    [
                      RHAP_UI.MAIN_CONTROLS,
                      RHAP_UI.PROGRESS_BAR,
                      RHAP_UI.VOLUME,
                    ]
                }
        customVolumeControls={[]}
        customControlsSection={
                    [
                      RHAP_UI.CURRENT_TIME,
                      RHAP_UI.DURATION,
                    ]
                }
        src={playingItem.audio}
      />
    </div>
  );
};

Player.defaultProps = {
  playingItem: null,
};

Player.propTypes = {
  playingItem: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    audio: PropTypes.string.isRequired,
    pressed: PropTypes.bool.isRequired,
    right: PropTypes.bool.isRequired,
  }),
};

export default Player;
