import styled, { device } from "@styled";

export const SectionWrap = styled.section`
    padding-block-end: 30px;
    ${device.medium} {
        padding-block-end: 50px;
    }
    ${device.large} {
        padding-block-end: 80px;
    }
`;
