import React from "react";
import {TitleStyled} from "./StyleForTitle";


const Title = ({children}) => {
    return (
        <TitleStyled>{children}</TitleStyled>
    )
}

export default Title;