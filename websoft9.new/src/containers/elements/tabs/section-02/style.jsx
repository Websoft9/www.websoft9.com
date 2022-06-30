import styled, { device } from "@styled";

export const SectionWrap = styled.div`
    padding-block-start: 50px;
    padding-block-end: 56px;
    background: #f8f8f8;
    ${device.medium} {
        padding-block-start: 70px;
        padding-block-end: 76px;
    }
    ${device.large} {
        padding-block-start: 86px;
        padding-block-end: 96px;
    }
`;
