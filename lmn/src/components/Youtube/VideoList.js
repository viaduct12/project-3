import React from 'react';
import VideoItem from '../Youtube/videoItem';

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        console.log(video.id);
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
        
    });

    return (
        <div className='ui relaxed divided list'>{renderedVideos}</div>
        
        );
};
export default VideoList;