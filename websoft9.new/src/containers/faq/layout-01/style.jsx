import styled, { device } from "@styled";

export const SectionWrap = styled.div`
    padding-block-start: 53px;
    padding-block-end: 60px;
    ${device.medium} {
        padding-block-start: 72px;
        padding-block-end: 80px;
    }
    ${device.large} {
        padding-block-start: 89px;
        padding-block-end: 80px;
    }
`;
