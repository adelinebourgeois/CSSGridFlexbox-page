import React from "react";
import {Header, NavigationNav, NavigationUl, NavigationLiContainer, NavigationButton, Logo} from "./StyleForNavigation";

const Navigation = () => {
    return (
        <Header>
                <Logo>Seminarin</Logo>
                <NavigationNav>
                    <NavigationUl>
                        <NavigationButton>Home</NavigationButton>
                        <NavigationButton>Events</NavigationButton>
                        <NavigationButton>Features</NavigationButton>
                        <NavigationButton>Demos</NavigationButton>
                        <NavigationButton>Contact us</NavigationButton>
                    </NavigationUl>
                </NavigationNav>
        </Header>
    )
}

export default Navigation;