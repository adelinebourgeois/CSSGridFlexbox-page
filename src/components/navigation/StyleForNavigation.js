import styled from 'styled-components';
import {colors} from "../../utilities/variables";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin-top: 3.5rem;
    margin-bottom: 8.6rem;
    grid-column: center-start / center-end;
    grid-row: 1;
`

export const NavigationNav = styled.nav`
    display: flex;
    flex: 0 0 67%;
`

export const NavigationUl = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const NavigationButton = styled.button`
    color: ${colors.black};
    font-weight: 600;
    font-size: 1.2rem;
    &:hover, &:focus {
        border-bottom: 1px solid ${colors.yellow}
    }
`

export const Logo = styled.h1`
    color: ${colors.black};
    font-weight: 800;
    font-size: 2.4rem;
    justify-self: start;
    cursor: pointer;
`