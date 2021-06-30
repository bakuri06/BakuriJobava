import React from 'react';
import AudioPlayer from 'react-audio-element';
import './Audio.css'

const Audio = ({ link }) => {
    return (
        <AudioPlayer
            src={'' + link + ''}
            overrideStyles={true}
            classNames={
                {
                    controlButton: "custom-control",
                    playPause: "custom-play-pause",
                    timeText: "custom-time-text",
                    sliderTrack: "custom-slider-track"
                }
            }
        />
    );
}

export default Audio;