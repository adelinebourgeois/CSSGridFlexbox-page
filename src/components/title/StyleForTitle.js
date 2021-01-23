import styled from 'styled-components';
import {colors} from "../../utilities/variables";

export const TitleStyled = styled.h2`
    width: 69%;
    font-size: 4rem;
    font-weight: 700;
    color: ${colors.black};
    grid-column: 2 / span 2;
    & span.background__blue {
        background-color: ${colors.blue};
        color: ${colors.greyLight};
        transform: rotate(20deg);
    }
`