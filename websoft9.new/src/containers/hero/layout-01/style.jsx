import styled, { themeGet, device } from "@styled";

export const HeroWrapper = styled.section`
    background-color: #f4efe9;
`;

export const HeroTextBox = styled.div`
    max-width: 605px;
    width: 100%;
    padding-inline-start: 0;
    margin-block-start: 50px;
    margin-block-end: 20px;
    margin-inline: auto;
    text-align: center;

    ${device.medium} {
        padding-inline-start: 30px;
        margin-inline-start: auto;
        margin-inline-end: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        text-align: left;
    }
`;

export const ImageBoxWrap = styled.div`
    position: relative;
    margin-inline: auto;
    max-width: 370px;

    ${device.medium} {
        padding-block-start: 160px;
        max-width: 100%;
        margin-inline: 0;
    }
    ${device.large} {
        margin-block-start: 20px;
        padding-block-start: 0;
    }
`;

export const ImageBoxOne = styled.div`
    position: absolute;
    top: 10px;
    width: 100%;
    max-width: 260px;
    margin-inline: auto;
    ${device.medium} {
        max-width: 100%;
        margin-inline: 0;
    }
`;

export const ImageBoxTwo = styled.div`
    position: relative;
    z-index: 1;
`;

export const StyledSubtitle = styled.h6`
    font-weight: 500;
    color: ${themeGet("colors.primary")};
    margin-block-end: 20px;
`;

export const StyledTitle = styled.h1`
    font-weight: 500;
    margin-block-end: 15px;
`;
