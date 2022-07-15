import styled, { themeGet } from "@styled";

export const BoxImgInner = styled.div`
    box-shadow: ${themeGet("shadows.lg")};
    background: #fff;
    border-radius: ${themeGet("radii.md")};
    overflow: hidden;
    position: relative;
    height: 100%;
    transition: ${themeGet("transition")};
    padding-block-start: 98px;
    padding-block-end: 88px;
    padding-inline: 35px;
`;

export const BoxImgMediaWrap = styled.figure`
    position: relative;
    width: 162px;
    height: 162px;
    border-radius: ${themeGet("radii.round")};
    margin-block-start: 0;
    margin-block-end: 2px;
    margin-inline: auto;
    text-align: center;
    z-index: 2;
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(160deg, #fbf7f4 0%, #fefdfd 100%);
        border-radius: ${themeGet("radii.round")};
        transform: translateY(-46px);
        z-index: -1;
    }
    .gatsby-image-wrapper {
        margin-inline: auto;
    }
`;

export const BoxImgContent = styled.div`
    text-align: center;
`;

export const HeadingWrap = styled.h5`
    font-weight: 500;
    line-height: 1.25;
    margin-block-end: 12px;
`;

export const TextWrap = styled.p``;

export const BoxImgBtnWrap = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: 56px;
    line-height: 55px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    border-top: 1px solid ${themeGet("colors.gray.400")};
    &:before {
        background-color: ${themeGet("colors.primary")};
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transform: translateY(100%);
        transition: ${themeGet("transition")};
        z-index: -1;
    }
`;

export const BoxImgWrapper = styled.div`
    height: 100%;
    &:hover {
        ${BoxImgInner} {
            transform: translateY(-5px);
        }
        ${BoxImgBtnWrap} {
            &:before {
                transform: translateY(0);
            }
            a {
                color: #fff;
            }
        }
    }
`;
