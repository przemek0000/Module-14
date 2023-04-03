import styled from "styled-components";

const StyledDiv = styled.div`
animation: revealFromLeft 0.4s ease forwards;
    animation-direction: alternate;
    @keyframes revealFromLeft {
    0% {
      opacity: 0;
        transform: translateX(-25%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
}
`

export default StyledDiv;