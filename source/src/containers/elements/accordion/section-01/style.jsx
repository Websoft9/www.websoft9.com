import styled, { device } from "@styled";

export const SectionWrap = styled.section`
    padding-block-start: 44px;
    padding-block-end: 25px;
    ${device.medium} {
        padding-block-start: 62px;
        padding-block-end: 43px;
    }
    ${device.large} {
        padding-block-start: 91px;
        padding-block-end: 72px;
    }
`;
