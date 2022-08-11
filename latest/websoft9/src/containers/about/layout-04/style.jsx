import styled, { device,themeGet } from "@styled";

export const SectionWrap = styled.section`
    padding-block-start: 60px;
    padding-block-end: 52px;
    ${device.medium} {
        padding-block-start: 80px;
        padding-block-end: 72px;
    }
    ${device.large} {
        padding-block-start: 100px;
        padding-block-end: 92px;
    }
`;
export const StyledLeftHeading = styled.h4`
    font-size: 24px;
    span {
        color: ${themeGet("colors.primary")};
    }
    ${device.medium} {
        font-size: 28px;
    }
    ${device.large} {
        font-size: 38px;
    }
`;