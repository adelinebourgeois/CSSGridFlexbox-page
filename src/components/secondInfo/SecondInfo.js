import React from "react";
import {InfoStyled, InfoTitle, InfoText} from "./StyleForSecondInfo";


const SecondInfo = ({title, children}) => {
    return (
        <InfoStyled>
            <InfoTitle>{title}</InfoTitle>
            <InfoText>{children}</InfoText>
        </InfoStyled>
    )
}

export default SecondInfo;