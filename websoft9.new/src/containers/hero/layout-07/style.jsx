import styled, { themeGet, device } from "@styled";

export const StyledHero = styled.section`
    position: relative;
    margin-block-end: 30px;
    ${device.large} {
        margin-block-end: 0;
    }
    ${device.xlarge} {
        margin-block-end: 200px;
    }
`;

export const StyledTextBox = styled.div`
    padding-block-start: 60px;
    position: relative;
    z-index: 1;
    ${device.medium} {
        padding-block-start: 80px;
    }
    ${device.large} {
        padding-block-start: 100px;
    }
    ${device.xlarge} {
        padding-block-start: 150px;
    }
`;

export const StyledHeading = styled.h1`
    font-size: clamp(34px, 6vw, 65px);
    line-height: 1.2;
    mark {
        color: ${themeGet("colors.primary")};
    }
`;

export const StyledSubtitle = styled.h6`
    margin-block-start: 30px;
`;

export const StyledBookBox = styled.div`
    margin-block-start: 40px;
    margin-block-end: 30px;
    position: relative;
    ${device.xlarge} {
        margin-block-start: 100px;
    }
`;

export const StyledBookBoxImage = styled.div`
    position: absolute;
    top: -30px;
    left: -80px;
    display: none;
    ${device.medium} {
        display: block;
    }
`;

export const StyledBookBoxText = styled.h5`
    margin-block-end: 15px;
    font-weight: 800;
    ${device.large} {
        max-width: 340px;
    }
`;

export const StyledForm = styled.div`
    max-width: 550px;
`;

export const StyledImage = styled.div`
    text-align: right;
    margin: auto;
    margin-block-start: 60px;
    ${device.large} {
        text-align: center;
    }
    ${device.xlarge} {
        position: absolute;
        top: 176px;
        right: 10px;
        text-align: right;
    }
`;
