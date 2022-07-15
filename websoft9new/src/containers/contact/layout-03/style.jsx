import styled, { themeGet, device } from "@styled";

export const SectionWrap = styled.section`
    position: relative;
    isolation: isolate;
    padding-block: 80px;
    background-color: rgb(0, 47, 166);
    overflow: hidden;
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
    ${device.small} {
        inset: 0 0 0 auto;
    }
    & > div {
        width: 100%;
        height: 100%;
        ${device.small} {
            width: auto;
            height: auto;
        }
    }
`;

export const ContactInfoBox = styled.div`
    text-align: center;
    margin-block-start: 45px;
    ${device.large} {
        margin-block-start: 0;
    }
    .icon {
        font-size: 40px;
        color: #fff;
        margin-block-end: 14px;
    }
`;

export const StyledHeading = styled.h3`
    font-weight: 600;
    color: #fff;
    position: relative;
    line-height: 1.4;
    padding-inline-start: 34px;
    &:before {
        position: absolute;
        content: "";
        left: 0px;
        top: 50%;
        width: 4px;
        height: 94%;
        transform: translateY(-50%);
        background-color: ${themeGet("colors.secondary")};
    }
`;

export const StyledText = styled.p`
    margin-block-start: 15px;
    font-size: 18px;
    color: #fff;
    margin-inline-start: 34px;
`;

export const StyledInfoTitle = styled.h6`
    font-size: 15px;
    color: #fff;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-block: 10px;
`;
