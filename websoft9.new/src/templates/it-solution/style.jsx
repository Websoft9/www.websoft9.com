import styled, { device } from "@styled";

export const BannerArea = styled.section`
    position: relative;
    isolation: isolate;
    padding-block-start: 100px;
    padding-block-end: 104px;

    ${device.large} {
        padding-block-start: 195px;
        padding-block-end: 204px;
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

export const StyledBannerTextWrap = styled.div`
    text-align: center;
    max-width: 750px;
    margin-inline: auto;
`;

export const StyledTitle = styled.h1`
    color: #fff;
    margin-block-end: 15px;
`;

export const StyledTagline = styled.h5`
    color: #fff;
    font-weight: 400;
`;
