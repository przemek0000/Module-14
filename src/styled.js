import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  background-color: #e6e6e6;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 24px;
}
`
export default StyledGlobal;
