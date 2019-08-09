import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading ...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div>
            <div className='ui embed' id="videoContainer">
                <iframe src={videoSrc} id="embeded" allowFullScreen title='Video player'/>
            </div>
            <div className='ui segment' id="description">
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p >{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;