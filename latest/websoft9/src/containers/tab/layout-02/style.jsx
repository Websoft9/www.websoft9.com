import styled, { device, themeGet } from "@styled";

export const StyledTab = styled.section`
    padding-block-start: 60px;
    padding-block-end: 55px;
    // background-color: ${themeGet("colors.gray.100")};
    ${device.medium} {
        padding-block-start: 80px;
        padding-block-end: 76px;
    }
    ${device.large} {
        padding-block-start: 100px;
        padding-block-end: 100px;
    }
`;

export const Heading = styled.h6`
    font-weight: 500;
    line-height: 1.25;
    margin-block-end: 12px;
`;

export const Text = styled.div`
    color: ${themeGet("colors.text")};
`;

