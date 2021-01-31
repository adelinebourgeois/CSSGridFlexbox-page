import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {colors} from "../../../utilities/variables";

const BackgroundBlueText = styled.span`
    position: relative;
    display: inline-block;
    color: ${colors.greyLight};
    &:before {
        content: '';
        position: absolute;
        background-color: ${colors.blue};
        color: ${colors.greyLight};
        transform: rotate(-3deg);
        z-index: -1;
        width: 14.7rem;
        height: 5rem;
    }
`

const BackgroundBlue = ({children}) => (
        <BackgroundBlueText>{children}</BackgroundBlueText>
    )

BackgroundBlue.propTypes = {
    children: PropTypes.node.isRequired
}

export default BackgroundBlue;