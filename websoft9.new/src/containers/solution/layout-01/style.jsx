import styled, { device } from "@styled";

export const SolutionsWrapper = styled.section`
    padding-block-start: 53px;
    padding-block-end: 56px;
    ${device.medium} {
        padding-block-start: 73px;
        padding-block-end: 76px;
    }
    ${device.large} {
        padding-block-start: 90px;
        padding-block-end: 96px;
    }
`;

export const SolutionBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const SolutionBoxItem = styled.div`
    margin-block-start: 40px;
    max-width: 100%;
    flex-basis: 100%;

    ${device.large} {
        max-width: 50%;
        flex-basis: 50%;
        padding-inline-end: 20px;
    }
`;

export const StyledHeading = styled.h3`
    text-align: center;
    margin-block-end: 10px;
    ${device.medium} {
        margin-block-end: 30px;
    }
`;
