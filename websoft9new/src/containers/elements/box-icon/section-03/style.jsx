import styled, { device } from "@styled";

export const SectionWrap = styled.section`
    padding-block-start: 39px;
    padding-block-end: 36px;
    ${device.medium} {
        padding-block-start: 54px;
        padding-block-end: 52px;
    }
    ${device.large} {
        padding-block-start: 53px;
        padding-block-end: 66px;
    }
`;
