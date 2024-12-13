import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import CaptionEditor from './CaptionEditor';
import CaptionTimeline from './CaptionTimeline';
import './App.css';

const App = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState([]);

  const handleAddCaption = (caption) => {
    setCaptions([...captions, caption]);
  };

  const handleDeleteCaption = (index) => {
    setCaptions(captions.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1>Video Caption App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
      </div>
      <div className="main-content">
        <VideoPlayer videoUrl={videoUrl} captions={captions}/>
        <CaptionEditor onAddCaption={handleAddCaption}/>
      </div>
      <CaptionTimeline captions={captions} onDeleteCaption={handleDeleteCaption}/>
    </div>
  );
};

export default App;