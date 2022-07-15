import styled, { device } from "@styled";

export const SectionWrap = styled.section`
    padding-block-start: 60px;
    padding-block-end: 50px;
    ${device.medium} {
        padding-block-start: 80px;
        padding-block-end: 70px;
    }
    ${device.large} {
        padding-block-start: 100px;
        padding-block-end: 90px;
    }
    .box-item {
        margin-block-start: 47px;
        ${device.small} {
            margin-block-start: 60px;
        }
    }
`;

export const SectionBottom = styled.div`
    text-align: center;
    margin-block-start: 36px;
    ${device.medium} {
        margin-block-start: 51px;
    }
`;
