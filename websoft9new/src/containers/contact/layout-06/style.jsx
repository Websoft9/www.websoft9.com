import styled, { device } from "@styled";

export const SectionWrap = styled.section`
    position: relative;
    isolation: isolate;
    background-color: #eff2f6;
    padding-block-start: 67px;
    padding-block-end: 75px;
    ${device.large} {
        padding-block-start: 100px;
        padding-block-end: 0;
    }
`;

export const StyledBG = styled.div`
    position: absolute;
    inset: 0;
    z-index: -1;
    & > div {
        height: 100%;
    }
`;
