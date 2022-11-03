import styled, { device } from "@styled";

export const SectionWrap = styled.section`
    background-color: #F8F8F8;
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
