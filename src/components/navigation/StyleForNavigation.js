import styled from 'styled-components';
import {colors} from "../../utilities/variables";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding-top: 35px;
    padding-bottom: 86px;
`

export const NavigationNav = styled.nav`
    width: 45%;
    display: flex;
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
    cursor: pointer;
    border: none;
    padding-bottom: 5px;
    background: none;
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