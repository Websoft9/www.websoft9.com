import styled, { themeGet, device } from "@styled";

export const HeroWrapper = styled.section`
    background-color: ${themeGet("colors.primary")};
    overflow: hidden;
    position: relative;
    isolation: isolate;
`;

export const StyledBG = styled.div`
    position: absolute;
    inset: 0;
    z-index: -1;
    & > div {
        height: 100%;
        width: 100%;
    }
`;

export const HeroTextBox = styled.div`
    max-width: 730px;
    width: 100%;
    margin-block-start: 60px;
    text-align: center;
    ${device.medium} {
        margin-block-start: 0;
        text-align: left;
    }
`;

export const HeroBtnGroup = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    margin-block-start: 20px;
    ${device.medium} {
        justify-content: left;
        margin-block-start: 30px;
    }
`;

export const ImageBox = styled.div`
    display: flex;
    max-width: 300px;
    margin-inline: auto;
    margin-block-start: 30px;
    ${device.medium} {
        margin-inline-start: -50px;
        margin-block-start: 100px;
        max-width: 320px;
    }
    ${device.large} {
        margin-inline-start: -80px;
        margin-block-start: 100px;
        max-width: 375px;
    }
    ${device.xlarge} {
        max-width: 450px;
    }
    ${device.xxxlarge} {
        margin-inline-start: -130px;
        margin-inline-end: -200px;
        margin-block-start: 50px;
        max-width: 603px;
    }
    img {
        margin: 0 auto;
    }
`;

export const StyledSubtitle = styled.h6`
    line-height: 36px;
    text-transform: uppercase;
    margin-block-end: 15px;
    color: #fff;
    font-size: 16px;
    letter-spacing: 1px;
    ${device.medium} {
        letter-spacing: 3px;
        font-size: 18px;
        margin-block-end: 20px;
    }
`;

export const StyledTitle = styled.h1`
    font-size: clamp(28px, 5vw, 68px);
    font-weight: 500;
    color: #fff;
    line-height: 1.2;
    letter-spacing: 0px;
    margin-block-end: 15px;
    span {
        color: ${themeGet("colors.secondary")};
    }
`;

export const StyledText = styled.p`
    font-size: 16px;
    line-height: 26px;
    font-weight: 500;
    color: #fff;
    ${device.small} {
        font-size: 18px;
        line-height: 32px;
    }
`;
