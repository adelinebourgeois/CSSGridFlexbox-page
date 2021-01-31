import styled from 'styled-components';
import {colors} from "../../../utilities/variables";

export const TitleStyled = styled.h2`
    font-size: 4rem;
    font-weight: 800;
    color: ${colors.black};
`

export const FirstSectionTitle = styled(TitleStyled)`
    padding-left: 3rem;
    grid-column: 2 / span 2;
    z-index: 1;
    align-self: center;
`

export const SecondSectionTitle = styled(TitleStyled)`
    grid-row: 1 / span 2;
    font-size: 3rem;
`