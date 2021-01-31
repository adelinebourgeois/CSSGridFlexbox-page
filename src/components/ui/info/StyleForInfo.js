import styled from 'styled-components';
import {colors} from "../../../utilities/variables";

export const InfoStyled = styled.div`
    background-color: ${colors.greyLight};
    padding: 1rem 3rem;
`

export const InfoTitle = styled.p`
    color: ${colors.black};
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    ${props => props.border ? `border-left: 2px solid ${colors.blue}`  : ''};
`

export const InfoText = styled.p`
    font-size: 1.2rem;
`