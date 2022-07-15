import styled, { themeGet, device } from "@styled";

export const StyledSection = styled.section`
    background-color: ${themeGet("colors.spring")};
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
    span {
        color: ${themeGet("colors.primary")};
    }
    ${device.large} {
        margin-block-end: 0;
    }
`;

export const StyledBG = styled.div`
    position: absolute;
    right: -68px;
    top: -35%;
    z-index: -1;
`;
