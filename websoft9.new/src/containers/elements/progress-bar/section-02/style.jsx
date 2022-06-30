import styled, { device } from "@styled";

export const SectionWrap = styled.section`
    padding-block-end: 60px;
    ${device.medium} {
        padding-block-end: 80px;
    }
    ${device.large} {
        padding-block-end: 49px;
    }
`;

export const ProgressOneWrap = styled.div`
    margin-block-end: 40px;
    ${device.medium} {
        margin-block-end: 50px;
    }
`;

export const ProgressTwoWrap = styled.div``;
