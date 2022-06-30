import styled, { device } from "@styled";

export const SectionWrap = styled.section`
    padding-block-start: 60px;
    padding-block-end: 30px;
    ${device.medium} {
        padding-block-start: 80px;
        padding-block-end: 50px;
    }
    ${device.large} {
        padding-block-start: 100px;
        padding-block-end: 70px;
    }
`;
