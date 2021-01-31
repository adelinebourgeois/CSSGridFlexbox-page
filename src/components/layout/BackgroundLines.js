import React from "react";
import {
    StyledBackgroundLines,
    BackgroundLinesContainer,
    VerticalLine
} from "./StyleForLayout";

const BackgroundLines= () => {
    return (
        <BackgroundLinesContainer>
            <VerticalLine></VerticalLine>
            <VerticalLine></VerticalLine>
            <VerticalLine></VerticalLine>
            <VerticalLine></VerticalLine>
        </BackgroundLinesContainer>
    )
}

export default BackgroundLines;