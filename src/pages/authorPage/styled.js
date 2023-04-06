import styled, { keyframes } from "styled-components";

const revealFromRight = keyframes`
  from {
    opacity: 0;
     transform: translateX(+25%);
    }
  to {
      opacity: 1;
      transform: translateX(0);
    }
`

const StyledDiv = styled.div`
    animation: ${revealFromRight} 0.5s ease forwards;
    animation-direction: alternate;

 
`

export default StyledDiv;