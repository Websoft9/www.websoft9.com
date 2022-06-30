import styled, { device } from "@styled";

export const TeamListWrapper = styled.div`
    padding-block-end: 22px;
    padding-block-start: 20px;
    ${device.medium} {
        padding-block-start: 40px;
        padding-block-end: 75px;
    }
    ${device.large} {
        padding-block-start: 60px;
        padding-block-end: 95px;
    }
`;

export const StyledHeading = styled.h3`
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-block-end: 22px;
`;

export const StyledBox = styled.div`
    margin-block-end: 30px;
    ${device.medium} {
        margin-block-end: 0;
    }
`;
