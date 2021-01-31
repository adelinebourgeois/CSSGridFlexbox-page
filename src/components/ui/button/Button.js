import React from "react";
import PropTypes from 'prop-types';
import {ButtonStyled} from "./StyleForButton";


const Button = ({children, underline}) => {
    return (
        <ButtonStyled underline={underline}>
            {children}
        </ButtonStyled>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired
}

export default Button;