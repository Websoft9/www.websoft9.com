import styled, { device } from "@styled";

export const SectionWrap = styled.div`
    position: relative;
    isolation: isolate;
    padding-block: 100px;
    ${device.large} {
        padding-block: 150px;
    }
`;

export const StyledBG = styled.div`
    position: absolute;
    inset: 0;
    z-index: -1;
    & > div {
        width: 100%;
        height: 100%;
    }
`;

export const StyledTitle = styled.h2`
    font-weight: 600;
    color: rgb(255, 255, 255);
    line-height: 1.34;
    margin-block-end: 65px;
`;
