import styled, { device } from "@styled";

export const CaseStudyWrapper = styled.div`
    position: relative;
    isolation: isolate;
    padding-block: 60px;
    padding-inline: 15px;
    background-position: bottom left;
    background-size: auto;
    ${device.medium} {
        padding-block: 80px;
    }
    ${device.large} {
        padding-block: 100px;
    }
`;

export const StyledBG = styled.div`
    position: absolute;
    inset: auto 0 0 0;
    z-index: -1;
`;
