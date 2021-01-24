import styled from 'styled-components';
import {colors} from "../../utilities/variables";

export const InfoStyled = styled.div`
    ${props => props.background ? `background-color: ${colors.greyLight}` : ''};
    text-align: start;
    z-index: 1;
`

export const InfoTitle = styled.p`
    color: ${colors.black};
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 10px;
    ${props => props.border ? `border-left: 2px solid ${colors.blue}`  : ''};
`

export const InfoText = styled.p`
    font-size: 1.2rem;
`