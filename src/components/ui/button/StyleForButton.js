import styled from 'styled-components';
import {colors} from "../../../utilities/variables";

export const ButtonStyled = styled.button`
    background-color: ${colors.yellow};
    width: 100%;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${colors.white};
    padding: 0 2rem;
    & span.bold {
       font-weight: 700;
       text-decoration: ${props => props.underline ? 'underline' : ''};
    }
`

export const FirstSectionButton = styled(ButtonStyled)`
    grid-column: 3
`

export const SecondSectionButton = styled(ButtonStyled)`
    width: 11rem;
`