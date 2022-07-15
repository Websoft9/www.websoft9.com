import styled, { device, themeGet } from "@styled";

export const SectionWrap = styled.section`
    padding-block: 60px;
    background: ${themeGet("colors.spring")};
    text-align: center;
    ${device.medium} {
        padding-block: 120px;
    }
    ${device.large} {
        padding-block: 150px;
    }
`;

export const StyledHeading = styled.h2`
    font-size: clamp(32px, 5vw, 64px);
    line-height: 1.13;
    color: rgb(0, 47, 166);
    margin-block-end: 30px;
`;
