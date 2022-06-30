import styled, { themeGet, device } from "@styled";

export const HeroWrapper = styled.section`
    overflow: hidden;
    background: #f6fafe;
`;

export const HeroContent = styled.div`
    max-width: 680px;
    width: 100%;
    padding-block-start: 100px;
    ${device.medium} {
        padding-block-start: 0;
    }
    ${device.large} {
        margin-inline-start: auto;
        padding-inline-start: 110px;
    }
`;

export const HeroImagesWrap = styled.div`
    position: relative;
    padding-block-start: 60px;
    ${device.medium} {
        padding-block-start: 80px;
    }
`;

export const HeroImageOne = styled.figure`
    position: absolute;
    z-index: 1;
    bottom: 0;
    width: 100%;
    height: auto;
    ${device.xlarge} {
        height: 100%;
    }
`;

export const HeroImageTwo = styled.figure`
    position: relative;
    z-index: 2;
    display: flex;
    img {
        margin: 0 auto;
    }
`;

export const StyledSubtitle = styled.h6`
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 700;
    font-size: 14px;
    margin-block-end: 15px;
    ${device.medium} {
        margin-block-end: 20px;
    }
`;

export const StyledTitle = styled.h3`
    margin-block-end: 20px;
    font-size: clamp(25px, 4vw, 40px);
    span {
        color: ${themeGet("colors.primary")};
    }
    ${device.medium} {
        margin-block-end: 30px;
    }
`;
