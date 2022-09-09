import styled, { device } from "@styled";

export const SectionWrap = styled.div`
    padding-block-start: 60px;
    padding-block-end: 50px;
    background: #f8f8f8;
    ${device.medium} {
        padding-block-start: 80px;
        padding-block-end: 70px;
    }
    ${device.large} {
        padding-block-start: 100px;
        padding-block-end: 90px;
    }
    .box-item {
        margin-block-start: 48px;
        ${device.large} {
            margin-block-start: 60px;
        }
    }
`;
