import { Outlet } from "react-router-dom";
import { StyledLi, StyledNavLink, StyledUl, StyleApp } from "./styled";

export default function App() {
    return (
        <>
            <nav>
                <StyledUl>
                    <StyledLi>
                        <StyledNavLink to={`tasks`}>Zadania</StyledNavLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledNavLink to={`author`}>O autorze</StyledNavLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledNavLink to={``}>Demo</StyledNavLink>
                    </StyledLi>
                </StyledUl>
            </nav>
            <section>
                <StyleApp >
                    <Outlet />
                </StyleApp>
            </section>
        </>
    )
}

