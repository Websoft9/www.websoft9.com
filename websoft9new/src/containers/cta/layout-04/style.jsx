import styled, { themeGet, device } from "@styled";

export const StyledSection = styled.section`
    background-color: #454545;
    padding-block: 40px;
    position: relative;
    isolation: isolate;
    overflow: hidden;
    ${device.medium} {
        padding-block: 60px;
    }
    ${device.large} {
        padding-block: 80px;
    }
`;

export const StyledHeading = styled.h3`
    margin-block-end: 10px;
    color: #fff;
    span {
        color: ${themeGet("colors.secondary")};
    }
    ${device.large} {
        margin-block-end: 0;
    }
`;

export const StyledBG = styled.div`
    position: absolute;
    right: -68px;
    top: 0;
    z-index: -1;
`;
