import styled, { device } from "@styled";

export const SectionWrap = styled.section`
    padding-block-end: 60px;
    ${device.medium} {
        padding-block-end: 80px;
    }
    ${device.large} {
        padding-block-end: 100px;
    }
`;
