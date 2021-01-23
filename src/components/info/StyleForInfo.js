import styled from 'styled-components';
import {colors} from "../../utilities/variables";

export const InfoStyled = styled.div`
    ${props => props.background ? `background-color: ${colors.greyLight}` : ''};
    grid-row: 3;
    grid-column: 2;
`

export const InfoTitle = styled.p`
    color: ${colors.black};
    font-size: 1.4rem;
    font-weight: 700;
    ${props => props.border ? `border-left: 1px solid ${colors.blue}`  : ''};
`
export const InfoText = styled.p`
    font-size: 1.2rem;
`