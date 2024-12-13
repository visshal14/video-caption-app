import React, { useState } from 'react';

const CaptionEditor = ({ onAddCaption }) => {
    const [text, setText] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const handleAdd = () => {
        if (text && start && end) {
            onAddCaption({ text, start, end });
            setText('');
            setStart('');
            setEnd('');
        }
    };

    return (
        <div className="caption-editor-container">
            <textarea
                placeholder="Enter Caption Text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <input
                type="text"
                placeholder="Start Time (e.g ,00:00:05)"
                value={start}
                onChange={(e) => setStart(e.target.value)}
            />
            <input
                type="text"
                placeholder="End Time (e.g ,00:00:10)"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
            />
            <button onClick={handleAdd}>Add Caption</button>
        </div>
    );
};

export default CaptionEditor;
