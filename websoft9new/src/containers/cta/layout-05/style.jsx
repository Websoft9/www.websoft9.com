import styled, { device, themeGet } from "@styled";

export const ResourcesWrapper = styled.section`
    padding-block: 40px;
    background-color: ${themeGet("colors.gray.100")};
    position: relative;
    isolation: isolate;
    overflow: hidden;
`;

export const LeftBox = styled.div`
    max-width: 600px;
    margin-inline-start: auto;
    margin-inline-end: auto;
    text-align: center;
    ${device.medium} {
        padding-inline-start: 30px;
        padding-inline-end: 30px;
    }
    ${device.large} {
        padding-inline-start: 30px;
        padding-inline-end: 30px;
        text-align: left;
    }
`;

export const StyledBG = styled.div`
    position: absolute;
    inset: 0 40px 0 auto;
    z-index: -1;
    ${device.large} {
        inset: -15% 40px 0 auto;
    }
`;
