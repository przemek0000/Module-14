import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledInput = styled.input`
    padding: 5px;
    border: 2px solid #e6e6e6;

    &:focus {
        border: 2px solid black;
    }
`;

export const StyledButton = styled.button`
    color: white;
    font-weight: 100;
    background-color: hsl(180, 100%, 23%);
    border: 2px solid hsl(180, 100%, 23%);
    transition: 0.5s; 

    &:hover {
        background-color: hsl(180, 100%, 27%);
        transform: scale(1.1);
        cursor: pointer;
    }

    &:active {
        background-color: hsl(180, 100%, 30%);
    }
`;