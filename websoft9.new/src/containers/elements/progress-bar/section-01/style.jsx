import styled, { device } from "@styled";

export const SectionWrap = styled.section`
    padding-block-start: 55px;
    padding-block-end: 56px;
    ${device.medium} {
        padding-block-start: 76px;
        padding-block-end: 76px;
    }
    ${device.large} {
        padding-block-start: 96px;
        padding-block-end: 55px;
    }
`;

export const ProgressOneWrap = styled.div`
    margin-block-end: 40px;
    @media ${device.medium} {
        margin-block-end: 50px;
    }
`;

export const ProgressTwoWrap = styled.div``;
