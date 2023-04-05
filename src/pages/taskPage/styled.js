import styled from "styled-components";

const StyledButton = styled.button`
    font-size: 18px;
    background: green;
    color: white;
    border: 1px solid teal;
    border-radius: 15%;

    &:hover {
        filter: brightness(1.1)
    }
    &:active {
        filter: brightness(1.25)
    }
`;

export const StyledDiv = styled.div`
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

export default StyledButton;