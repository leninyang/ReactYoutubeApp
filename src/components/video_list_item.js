import React from 'react';

// Generates info for each video in the VideoList
const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video;
  //Image for thumbnail
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    // When li clicked - call onVideoSelect() and pass video
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
