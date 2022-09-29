import styled, { device } from "@styled";

export const SectionWrap = styled.div`
    padding-block-start: 75px;
    padding-block-end: 75px;
    ${device.large} {
        padding-block-start: 95px;
        padding-block-end: 95px;
    }
`;
