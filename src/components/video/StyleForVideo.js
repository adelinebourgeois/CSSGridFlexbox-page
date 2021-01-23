import styled from 'styled-components';
import {colors} from "../../utilities/variables";

export const VideoStyled = styled.div`
   background-color: red;
   width: 91%;
   position: relative;
   grid-row: 1 / span 2;
   &:before {
    content: '';
    background-color: ${colors.greyLight};
    width: 157px;
    position: absolute;
    height: 157px;
    left: -20px;
    top: -20px;
`