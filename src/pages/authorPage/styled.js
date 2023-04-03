import styled from "styled-components";

const StyledDiv = styled.div`
    animation: revealFromRight 0.5s ease forwards;
    animation-direction: alternate;

    @keyframes revealFromRight {
    0% {
      opacity: 0;
        transform: translateX(+25%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
}
`

export default StyledDiv;