import styled, { css } from "styled-components";

export const StyledTasks = styled.ul`
    list-style: none;
    padding: 0px 5px;
    margin: 5px;
`;

export const StyledList = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    justify-content: center;
    padding: 10px 10px;
    border-bottom: 2px solid #e6e6e6;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const StyledButtons = styled.button`
    background-color: ${({ theme }) => theme.colors.done.display};
    color: white;
    border: none;
    width: 30px;
    height: 30px;
    display: grid;
    justify-content: center;
    align-items: center;
    transition: 0.5s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.done.hover};
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.done.active};
    }

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.colors.remove.display};
    
        &:hover {
            background-color: ${({ theme }) => theme.colors.remove.hover};
        }

        &:active {
            background-color:${({ theme }) => theme.colors.remove.active};
        }
    `}
`;