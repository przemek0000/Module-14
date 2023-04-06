import styled, { keyframes } from "styled-components";
import background from "../../demo.gif";

const revealFromBehind = keyframes`
    from {
      opacity: 0;
        transform: scale(0.7);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
`

const StyledDiv = styled.div`
    max-width: 1250px;
    height: 680px;
    background-image: url("${background}");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top center;
    background-position-y: 30px;
    
    animation: ${revealFromBehind} 0.4s ease forwards;
    animation-direction: alternate;
`

export default StyledDiv;