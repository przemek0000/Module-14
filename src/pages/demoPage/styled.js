import styled from "styled-components";
import background from "../../demo.gif";

const StyledDiv = styled.div`
    max-width: 1250px;
    height: 680px;
    background-image: url("${background}");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top center;
    background-position-y: 30px;
    
    animation: revealFromBehind 0.4s ease forwards;
    animation-direction: alternate;
    @keyframes revealFromBehind {
    0% {
      opacity: 0;
        transform: scale(0.7);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
}
`

export default StyledDiv;