import styled, { device, themeGet } from "@styled";

export const BoxImgInner = styled.div`
    border-radius: 4px;
    transition: ${themeGet("transition")};
    padding-block-start: 20px;
    padding-block-end: 26px;
    padding-inline: 30px;
    ${device.large} {
        padding-block-start: 30px;
        padding-block-end: 31px;
        padding-inline: 35px;
    }
`;

export const BoxImgMediaWrap = styled.figure`
    text-align: center;
    margin-block-end: 24px;
    position: relative;
    z-index: 2;
    .gatsby-image-wrapper {
        margin-inline: auto;
    }
`;

export const BoxImgContent = styled.div`
    text-align: center;
`;

export const HeadingWrap = styled.h6`
    font-weight: 500;
    line-height: 1.25;
    margin-block-end: 12px;
`;

export const TextWrap = styled.p`
    color: ${themeGet("colors.text")};
`;

export const BoxImgWrapper = styled.div`
    &:hover {
        ${BoxImgInner} {
            transform: translateY(-5px);
            background: #fff;
            box-shadow: ${themeGet("shadows.md")};
        }
    }
`;
