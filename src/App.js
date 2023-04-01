import { Outlet } from "react-router-dom";
import { StyledLi, StyledNavLink, StyledUl, StyleApp } from "./styled";

export default function App() {
    return (
        <nav>
            <StyledUl>
                <StyledLi>
                    <StyledNavLink to={`zadania`}>Zadania</StyledNavLink>
                </StyledLi>
                <StyledLi>
                    <StyledNavLink to={`autor`}>O autorze</StyledNavLink>
                </StyledLi>
            </StyledUl>
            <StyleApp >
                <Outlet />
            </StyleApp>
        </nav>

    )
}

