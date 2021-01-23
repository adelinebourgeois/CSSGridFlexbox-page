import React from "react";
import {ButtonStyled, ButtonText} from "./StyleForButton";


const Button = ({children, underline}) => {
    return (
        <ButtonStyled>
            <ButtonText underline={underline}>{children}</ButtonText>
        </ButtonStyled>
    )
}

export default Button;