import styled, { device } from "@styled";

export const SectionWrap = styled.section`
    padding-block-start: 50px;
    padding-block-end: 60px;
    ${device.medium} {
        padding-block-start: 70px;
        padding-block-end: 80px;
    }
    ${device.large} {
        padding-block-start: 90px;
        padding-block-end: 100px;
    }
`;
