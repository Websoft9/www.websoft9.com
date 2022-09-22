import styled, { themeGet, device } from "@styled";

export const ConatactWrapper = styled.div`
    position: relative;
    isolation: isolate;
    padding-block: 80px;
    background-color: #eff2f6;
    ${device.medium} {
        padding-block: 100px;
    }
    ${device.large} {
        padding-block: 120px;
    }
`;

export const StyledBG = styled.div`
    position: absolute;
    inset: 0;
    z-index: -1;
`;

export const ContactInfoBox = styled.div`
    text-align: center;
    margin-block-start: 45px;
    .icon {
        color: ${themeGet("colors.primary")};
        font-size: 40px;
    }
    ${device.large} {
        margin-block-start: 0;
    }
`;

export const StyledHeading = styled.h3`
    font-weight: 600;
    position: relative;
    line-height: 1.4;
    padding-inline-start: 34px;
    span {
        color: ${themeGet("colors.primary")};
    }
    &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0px;
        width: 4px;
        height: 94%;
        transform: translateY(-50%);
        background-color: ${themeGet("colors.secondary")};
    }
`;

export const StyledText = styled.p`
    margin-block-start: 15px;
    font-size: 18px;
    margin-inline-start: 34px;
`;

export const StyledInfoTitle = styled.h6`
    font-size: 15px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-block-end: 10px;
    margin-block-start: 10px;
`;
