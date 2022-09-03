import styled, { device } from "@styled";

export const SectionWrap = styled.div`
    padding-block-start: 55px;
    padding-block-end: 17px;
    ${device.medium} {
        padding-block-start: 74px;
        padding-block-end: 16px;
    }
    ${device.large} {
        padding-block-start: 94px;
        padding-block-end: 86px;
    }
`;

export const ListGroupWrap = styled.div`
    margin-block-end: 30px;
    ${device.medium} {
        margin-block-end: 50px;
    }
    ${device.large} {
        margin-block-end: 0;
    }
`;
