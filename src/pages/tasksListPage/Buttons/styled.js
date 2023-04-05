import styled from "styled-components";
import { css } from "styled-components";

export const StyledButton = styled.button`
    padding: 0px;
    font-size: 19px;
    transition: 0.5s;
    border: none;
    background-color: white;
    color: hsl(180, 100%, 30%);

    &:hover {
        color: hsl(180, 100%, 37%);
        cursor: pointer;
    }
    &:active {
        color: hsl(180, 100%, 40%);
    }
    &:disabled {
        color: grey;
    }
`;

export const StyledGetExampleTasksButton = styled.button`
    ${(props) => props.disabled && css`
    transition: none;
    `}
`
