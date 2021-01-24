import React from "react";
import {VideoStyled} from "./StyleForVideo";


const Video = () => {
    return (
        <VideoStyled>
            <video
                width='100%'
                height='100%'
                controls
                autoPlay={false}
                src='https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4' />
        </VideoStyled>
    )
}

export default Video;