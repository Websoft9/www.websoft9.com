import styled, { device } from "@styled";

export const HeroWrapper = styled.section`
    min-height: 590px;
    display: flex;
    align-items: center;
    position: relative;
    isolation: isolate;
    background-color: #000;
    ${device.medium} {
        min-height: 670px;
    }
    ${device.xlarge} {
        min-height: 740px;
    }
    ${device.xxlarge} {
        min-height: 880px;
    }
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

export const HeroSeparator = styled.div`
    position: absolute;
    width: 100%;
    left: 0;
    z-index: 1;
    line-height: 0;
    bottom: 0;
    svg {
        fill: #f8f8f8;
        height: 100px;
        width: 100%;
    }
    i {
        color: #f8f8f8;
        height: 100px;
        width: 100%;
    }
`;

export const HeroContent = styled.div`
    text-align: center;
`;

export const HeroBtnGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-block-start: 15px;
    ${device.small} {
        margin-block-start: 30px;
    }
    ${device.medium} {
        margin-block-start: 40px;
    }
    ${device.large} {
        margin-block-start: 50px;
    }
`;

export const StyledSubtitle = styled.h3`
    color: #fff;
    margin-block-end: 15px;
    font-size: clamp(22px, 4vw, 32px);
    ${device.medium} {
        margin-block-end: 20px;
    }
`;

export const StyledTitle = styled.h1`
    font-size: clamp(40px, 6.3vw, 120px);
    color: #fff;
    line-height: 1.09;
    margin-block-end: 20px;
    ${device.xlarge} {
        margin-block-end: 30px;
    }
`;

export const StyledDesc = styled.p`
    color: #fff;
    font-weight: 500;
`;
