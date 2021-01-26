import styled from 'styled-components';
import {colors} from "../../utilities/variables";

export const TitleStyled = styled.h2`
    text-align: start;
    font-size: 4rem;
    font-weight: 800;
    color: ${colors.black};
    & span.background__blue {
        color: ${colors.greyLight};
        &:before {
            content: '';
            position: absolute;
            background-color: ${colors.blue};
            color: ${colors.greyLight};
            transform: rotate(-6deg);
            z-index: -1;
            width: 147px;
            height: 50px;
            top: 76px;
        }
    }
`