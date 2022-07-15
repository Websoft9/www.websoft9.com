import styled, { device } from "@styled";

export const StyledSection = styled.section`
    padding-block-start: 60px;
    margin-block-end: 60px;
    ${device.medium} {
        padding-block-start: 80px;
        margin-block-end: 80px;
    }
    ${device.large} {
        padding-block-start: 100px;
        margin-block-end: 100px;
    }
    counter-reset: claim;
`;

export const StyledGrid = styled.div`
    display: grid;
    grid-gap: 20px;
    ${device.small} {
        grid-template-columns: repeat(2, 1fr);
    }
    ${device.large} {
        grid-template-columns: repeat(3, 1fr);
    }
    ${device.xlarge} {
        grid-template-columns: repeat(5, 1fr);
    }
`;
