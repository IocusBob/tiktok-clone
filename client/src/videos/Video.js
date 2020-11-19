import React, {useRef, useState} from 'react';
import "./Video.css"
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

export const Video = ({url, channel, description, song, likes, messages, shares}) => {
const videoRef = useRef(null);
const [videoPlaying, setVideoPlaying] = useState(false)
const handleVideoClick = () => {
    if (videoPlaying){
        videoRef.current.pause();
        setVideoPlaying(false);
    } else {
        videoRef.current.play();
        setVideoPlaying(true);
    }
}
    return (
        <div className="video">
            <video 
                onClick={handleVideoClick}
                loop
                ref={videoRef}
                className="video__player"
                src={url}>

            </video>
            <VideoFooter channel={channel} description={description} song={song}/>
            <VideoSidebar likes={likes} messages={messages} shares={shares} />
        </div>
    )
}
