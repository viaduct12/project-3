import React from 'react';
import './style/video.css'

const VideoDetail = ({video}) => {
    if (!video) {
        return <div id="loading-div"></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div id="videoActualContainer">
            <div className='ui embed' id="videoContainer">
                <iframe src={videoSrc} id="embed" allowFullScreen title='Video player'/>
            </div>
            <div className='ui segment' id="description">
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p >{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;