import styled from 'styled-components';
import {colors} from "../../utilities/variables";

export const ButtonStyled = styled.button`
    background-color: ${colors.yellow};
    width: 100%;
    & span.bold {
        font-weight: 700;
    }
`

export const ButtonText = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    color: ${colors.white};
    text-decoration: ${props => props.underline ? 'underline' : ''};
`