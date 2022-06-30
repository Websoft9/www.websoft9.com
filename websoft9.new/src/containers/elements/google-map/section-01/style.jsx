import styled, { device } from "@styled";

export const SectionWrap = styled.section`
    padding-block-start: 53px;
    padding-block-end: 53px;
    ${device.medium} {
        padding-block-start: 72px;
        padding-block-end: 72px;
    }
    ${device.large} {
        padding-block-start: 90px;
        padding-block-end: 90px;
    }
    .map-one {
        margin-block-end: 50px;
        ${device.large} {
            margin-block-end: 0;
        }
    }
`;
