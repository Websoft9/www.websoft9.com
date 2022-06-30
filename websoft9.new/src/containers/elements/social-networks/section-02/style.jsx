import styled, { themeGet, device } from "@styled";

export const SectionWrap = styled.div`
    background: ${themeGet("colors.primary")};
    padding-block-start: 75px;
    padding-block-end: 26px;
    ${device.large} {
        padding-block-start: 93px;
        padding-block-end: 36px;
    }
`;

export const IconsWrap = styled.div`
    margin-block-end: 50px;
    ${device.medium} {
        margin-block-end: 60px;
    }
`;
