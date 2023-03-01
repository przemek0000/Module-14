import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: white;
    margin: 10px 0px;
`;

export const StyledDiv = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobiles}px) {
        flex-direction: column;
    }
`;

export const StyledHeader = styled.header`
    display: grid;
    justify-content: space-between;
    grid-template-columns: auto auto;
    margin: 5px 0;
    padding: 20px 25px;
    border-bottom: 2px solid #e6e6e6;
    font-weight: 700;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobiles}px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledBody = styled.div`
    padding: 15px 20px;
`;