import React from "react";
import {InfoStyled, InfoTitle, InfoText} from "./StyleForInfo";


const Info = ({background, border, title, children}) => {
    return (
        <InfoStyled background={background}>
            <InfoTitle border={border}>{title}</InfoTitle>
            <InfoText>{children}</InfoText>
        </InfoStyled>
    )
}

export default Info;