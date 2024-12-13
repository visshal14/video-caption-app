import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl, captions }) => {
    const [currentCaption, setCurrentCaption] = useState('');

    const handleProgress = (state) => {
        const currentTime = state.playedSeconds;
        const activeCaption = captions.find((caption) =>
                currentTime >= parseTime(caption.start) && currentTime <= parseTime(caption.end)
        );
        setCurrentCaption(activeCaption ? activeCaption.text : '');
    };

    const parseTime = (timeString) => {
        const [hours, minutes, seconds] = timeString.split(':').map(Number);
        return hours * 3600 + minutes * 60 + seconds;
    };

    return (
        <div className="video-player-container">
            {videoUrl ? (
                <ReactPlayer
                    url={videoUrl}
                    controls
                    playing
                    width="100%"
                    height="100%"
                    onProgress={handleProgress}
                />
            ) : (
                <p>Enter a video URL to preview here</p>
            )}
            <div className="captions-overlay">
                {currentCaption}
            </div>
        </div>
    );
};

export default VideoPlayer;