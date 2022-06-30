import styled, { device } from "@styled";

export const SectionWrap = styled.section`
    padding-block-start: 60px;
    padding-block-end: 22px;
    background: #f8f8f8;
    ${device.medium} {
        padding-block-start: 80px;
        padding-block-end: 42px;
    }
    ${device.large} {
        padding-block-start: 100px;
        padding-block-end: 63px;
    }
`;
