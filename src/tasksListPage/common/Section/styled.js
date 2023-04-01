import styled, { css } from "styled-components";

export const StyledSection = styled.section`
    background-color: white;
    margin: 10px 0px;
`;

export const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr auto auto;
    margin: 5px 0;
    padding: 20px 25px;
    border-bottom: 2px solid #e6e6e6;
    font-weight: 700;
    ${props => !props.primary && css`
    grid-gap: 20px;
    `}

    @media (max-width: ${({ theme }) => theme.breakPoints.mobiles}px) {
        grid-template-columns: 1fr;
        ${props => props.primary && css`
        display: flex;
        justify-content: space-between;
        `}
    }
`;

export const StyledBody = styled.div`
    padding: 15px 25px;
`;