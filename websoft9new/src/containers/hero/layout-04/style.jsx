import styled, { themeGet, device } from "@styled";

export const HeroWrapper = styled.section`
    height: auto;
    padding-block: 80px;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    isolation: isolate;
    background-color: ${themeGet("colors.black")};
    text-align: center;
    ${device.small} {
        padding-block: 100px;
    }
    ${device.large} {
        padding-block: 0;
        height: 650px;
    }
    ${device.xlarge} {
        height: 770px;
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

export const StyledSubtitle = styled.h3`
    line-height: clamp(28px, 4vw, 36px);
    margin-block-end: 15px;
    color: #fff;
    ${device.medium} {
        margin-block-end: 20px;
    }
`;

export const StyledTitle = styled.h1`
    color: #ffffff;
    font-size: clamp(40px, 6vw, 120px);
    line-height: 1.09;
    margin-block-end: 20px;
    ${device.medium} {
        margin-block-end: 30px;
    }
`;

export const StyledDesc = styled.p`
    margin-block-start: 20px;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    ${device.medium} {
        margin-block-start: 30px;
    }
`;
