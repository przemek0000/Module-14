import { Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
html {
  box-sizing: border-box;
  background-color: #e6e6e6;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 24px;
}

*, ::after, ::before {
  box-sizing: inherit;
}
`
export default StyledGlobal;

export const StyleApp = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  background-color: #e6e6e6;
`

export const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 50px;
  background: teal;
  list-style: none;
  padding: 20px;
`;

export const StyledLi = styled.li`
  display: inline-block;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`