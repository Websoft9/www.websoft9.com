import styled, { device, themeGet } from "@styled";

export const HeroWrapper = styled.div`
    position: relative;
    isolation: isolate;
    z-index: 1;
    padding-block: 60px;
    background-color: #000;
    ${device.medium} {
        padding-block: 80px;
    }
    ${device.large} {
        padding-block: 120px;
    }
`;

export const StyledBG = styled.div`
    position: absolute;
    inset: 0;
    z-index: -1;
    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
    }
`;

export const HeroTextWrap = styled.div`
    text-align: center;
    margin-block-end: 60px;
    ${device.medium} {
        text-align: left;
        margin-block-end: 0;
    }
`;

export const HeroButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${device.medium} {
        justify-content: flex-start;
    }
`;

export const AppointmentWrap = styled.div`
    max-width: 400px;
    background: #fff;
    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);
    border-radius: ${themeGet("radii.md")};
    text-align: center;
    margin-inline-start: auto;
    margin-inline-end: auto;
    padding-block-start: 42px;
    padding-block-end: 51px;
    padding-inline-start: 30px;
    padding-inline-end: 30px;
`;

export const AppointmentTitleWrap = styled.div`
    margin-block-end: 40px;
    text-align: center;
`;

export const AppointmentFormWrap = styled.div`
    text-align: start;
`;

export const StyledSubtitle = styled.h6`
    color: #fff;
`;

export const StyledTitle = styled.h1`
    font-weight: 500;
    color: #fff;
    margin-block-end: 30px;
`;
