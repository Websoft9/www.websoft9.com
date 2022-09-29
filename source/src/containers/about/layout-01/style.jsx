import styled, { device } from "@styled";

export const SectionWrap = styled.section`
    position: relative;
    z-index: 1;
`;

export const LeftBox = styled.div`
    margin-block-end: 40px;
    ${device.large} {
        margin-block-end: 0;
    }
`;
