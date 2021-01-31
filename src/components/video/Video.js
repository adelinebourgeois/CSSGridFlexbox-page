import React from "react";
import styled from "styled-components";
import {colors} from "../../utilities/variables";

const VideoContainer = styled.div`
   position: relative;
   overflow: hidden;
   padding-top: 56.25%;
   grid-row: 1 / span 2;
   & iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
   }
`

const VideoBackground = styled.div`
    background-color: ${colors.greyLight};
    width: 15rem;
    position: absolute;
    height: 15rem;
    left: -2rem;
    top: -2rem;
`


const Video = ({background}) => {
    return (
        <>
            {background && <VideoBackground></VideoBackground>}
            <VideoContainer>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/-jj-rHDjCvM" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </VideoContainer>
        </>
    )
}

export default Video;