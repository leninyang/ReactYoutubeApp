import React from 'react';


// Main Video Player - Displays Embeded video|Title|Description
const VideoDetail = ({video}) => {
  // Check for initial load
  // If video state is empty
  if (!video) {
    return <div>Loading...</div>;
  }
  // If there are videos in state, run below
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
