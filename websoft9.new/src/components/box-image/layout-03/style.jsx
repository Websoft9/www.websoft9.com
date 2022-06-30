import styled, { space, themeGet, device } from "@styled";
import { Link } from "gatsby";

export const BoxImgInner = styled.div`
    max-width: 340px;
    margin-inline: auto;
    margin-block: 0;
`;

export const BoxImgMedia = styled.div`
    margin-block-end: 25px;
    transition: ${themeGet("transition")};
    ${device.large} {
        margin-block-end: 36px;
    }
`;

export const BoxImgContent = styled.div``;

export const HeadingWrap = styled.h5`
    font-weight: 500;
    line-height: 1.67;
    margin-block-end: 0;
    font-size: 22px;
    ${device.xlarge} {
        font-size: 24px;
    }
    &:hover {
        color: ${themeGet("colors.primary")};
    }
`;

export const TextWrap = styled.p`
    color: ${themeGet("colors.text")};
`;

export const BoxImgLink = styled(Link)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    text-indent: -999999px;
`;

export const BoxImgWrapper = styled.div`
    position: relative;
    box-shadow: 0 0 41px rgba(0, 0, 0, 0.03);
    background: #fff;
    padding-block-start: 40px;
    padding-block-end: 65px;
    padding-inline: 30px;
    display: flex;
    flex-direction: column;
    height: 100%;
    &:hover {
        ${BoxImgLink} {
            opacity: 1;
            visibility: visible;
        }
        ${BoxImgMedia} {
            transform: translateY(-5px);
        }
        ${HeadingWrap} {
            color: ${themeGet("colors.primary")};
        }
    }
    ${space};
`;
