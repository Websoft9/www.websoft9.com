import styled, { device } from "@styled";

export const StyledSection = styled.section`
    padding-block-start: 53px;
    padding-block-end: 60px;
    ${device.medium} {
        padding-block-start: 72px;
        padding-block-end: 80px;
    }
    ${device.large} {
        padding-block-start: 89px;
        padding-block-end: 100px;
    }
`;

export const StyledSidebar = styled.aside`
    padding-inline-end: 30px;
    padding-block-start: 45px;
    ${device.large} {
        margin-block-start: 0;
    }
`;
