import styled from 'styled-components';
import {colors} from "../../utilities/variables";

export const ButtonStyled = styled.div`
    background-color: ${colors.yellow};
    padding: 20px;
    grid-column: 3;
    justify-self: flex-end;
    width: 75%;
`

export const ButtonText = styled.p`
    font-size: 1.4rem;
    font-weight: 500;
    color: ${colors.white};
    text-decoration: ${props => props.underline ? 'underline' : ''};
`