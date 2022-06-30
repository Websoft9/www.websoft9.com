import styled, { device } from "@styled";

export const SectionWrap = styled.div`
    padding-block-end: 24px;
    ${device.large} {
        padding-block-end: 94px;
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
