import styled, { device } from "@styled";

export const SectionWrap = styled.section`
    padding-block-start: 53px;
    padding-block-end: 60px;
    ${device.medium} {
        padding-block-start: 72px;
        padding-block-end: 80px;
    }
    ${device.large} {
        padding-block-start: 91px;
        padding-block-end: 100px;
    }
`;
