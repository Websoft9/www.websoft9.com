import styled, { device } from "@styled";

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
