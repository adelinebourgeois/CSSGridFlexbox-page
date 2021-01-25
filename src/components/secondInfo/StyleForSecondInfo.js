import styled from 'styled-components';
import {colors} from "../../utilities/variables";

export const InfoStyled = styled.div`
    text-align: start;
`

export const InfoTitle = styled.p`
    color: ${colors.black};
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 10px;
    border-left: 2px solid ${colors.blue};
    padding-left: 15px;
`

export const InfoText = styled.p`
    font-size: 1.2rem;
    padding-left: 15px;
`