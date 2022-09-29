import styled, { themeGet, device } from "@styled";

export const SectionWrap = styled.section`
    padding-block-start: 53px;
    padding-block-end: 19px;
    ${device.medium} {
        padding-block-start: 72px;
        padding-block-end: 25px;
    }
    ${device.large} {
        padding-block-start: 92px;
        padding-block-end: 40px;
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
