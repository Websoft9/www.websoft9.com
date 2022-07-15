import styled, { device } from "@styled";

export const SectionWrap = styled.section`
    padding-block-end: 30px;
    background: -webkit-linear-gradient(top, #fff 0, #f5f5f5 100%);
    ${device.medium} {
        padding-block-end: 50px;
    }
    ${device.large} {
        padding-block-end: 70px;
    }
`;
