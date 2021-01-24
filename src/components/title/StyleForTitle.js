import styled from 'styled-components';
import {colors} from "../../utilities/variables";

export const TitleStyled = styled.h2`
    text-align: start;
    font-size: 4rem;
    font-weight: 800;
    color: ${colors.black};
    & span.background__blue {
        background-color: ${colors.blue};
        color: ${colors.greyLight};
        transform: rotate(20deg);
    }
`