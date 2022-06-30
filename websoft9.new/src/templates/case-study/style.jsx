import styled, { device } from "@styled";

export const BannerArea = styled.section`
    position: relative;
    isolation: isolate;
    padding-block: 60px;
    ${device.medium} {
        padding-block: 100px;
    }
    ${device.large} {
        padding-block: 120px;
    }
    ${device.xlarge} {
        padding-block-start: 85px;
        padding-block-end: 195px;
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
    max-width: 900px;
    margin-inline: auto;
`;

export const StyledTagline = styled.h1`
    color: #fff;
    margin-top: 20px;
    margin-bottom: 15px;
`;
