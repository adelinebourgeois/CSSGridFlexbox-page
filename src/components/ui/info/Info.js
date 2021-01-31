import React from "react";
import {InfoStyled, InfoTitle, InfoText} from "./StyleForInfo";


const Info = ({title, children}) => {
    return (
        <InfoStyled>
            <InfoTitle>{title}</InfoTitle>
            <InfoText>{children}</InfoText>
        </InfoStyled>
    )
}

export default Info;