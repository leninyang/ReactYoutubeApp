import React from 'react';
import VideoListItem from './video_list_item';

// Generates a list of Videos
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    // Pass in video as a property named video
    return (
      <VideoListItem
        // VideoList takes that property and passes it down to VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    )
  });


  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
