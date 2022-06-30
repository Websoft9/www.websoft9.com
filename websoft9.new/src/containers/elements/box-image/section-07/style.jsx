import styled, { device } from "@styled";

export const SectionWrap = styled.div`
    padding-block-start: 60px;
    padding-block-end: 30px;
    ${device.medium} {
        padding-block-start: 80px;
        padding-block-end: 49px;
    }
    ${device.large} {
        padding-block-start: 100px;
        padding-block-end: 66px;
    }
    .box-item {
        margin-block-start: 10px;
    }
`;
