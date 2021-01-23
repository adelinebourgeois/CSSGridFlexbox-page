import React from "react";
import {
    StyledBackgroundLines,
    BackgroundLinesContainer,
    VerticalLine
} from "./StyleForLayout";

const BackgroundLines= () => {
    return (
        <StyledBackgroundLines>
            <BackgroundLinesContainer>
                <VerticalLine></VerticalLine>
                <VerticalLine></VerticalLine>
                <VerticalLine></VerticalLine>
                <VerticalLine></VerticalLine>
            </BackgroundLinesContainer>
        </StyledBackgroundLines>
    )
}

export default BackgroundLines;