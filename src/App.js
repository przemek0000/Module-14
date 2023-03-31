import { Outlet } from "react-router-dom";
import { StyledLi, StyledLink, StyledUl, StyleApp } from "./styled";

export default function App() {
    return (
        <nav>
            <StyledUl>
                <StyledLi>
                    <StyledLink to={`zadania`}>Zadania</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={`autor`}>O autorze</StyledLink>
                </StyledLi>
            </StyledUl>
            <StyleApp >
                <Outlet />
            </StyleApp>
        </nav>

    )
}

