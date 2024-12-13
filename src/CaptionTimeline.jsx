// src/components/CaptionTimeline.js
import React from 'react';

const CaptionTimeline = ({ captions, onDeleteCaption }) => {
    return (
        <div className="caption-timeline-container">
            <h3>Caption Timeline</h3>
            <ul>
                {captions.map((caption, index) => (
                    <li key={index}>
                        <span>
                            {caption.start} - {caption.end}: {caption.text}
                        </span>
                        <button onClick={() => onDeleteCaption(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CaptionTimeline;
