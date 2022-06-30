import styled, { css, themeGet, space } from "@styled";
import Anchor from "@ui/anchor";

export const BoxLargeImgInner = styled.div`
    background: #fff;
    border-radius: ${themeGet("radii.md")};
    overflow: hidden;
    position: relative;
    height: 100%;
`;

export const BoxLargeImgMedia = styled.div`
    position: relative;
    .gatsby-image-wrapper,
    img {
        width: 100%;
    }
`;

export const BoxLargeImgContent = styled.div`
    ${(props) =>
        props.$layout !== 2 &&
        css`
            padding-block-start: 32px;
            padding-block-end: 88px;
            padding-inline-start: 30px;
            padding-inline-end: 30px;
            text-align: center;
        `}
    ${(props) =>
        props.$layout === 2 &&
        css`
            padding-block-start: 25px;
            padding-block-end: 88px;
            padding-inline-start: 26px;
            padding-inline-end: 26px;
            text-align: start;
        `}
`;

export const HeadingWrap = styled.h2`
    line-height: 1.25;
    ${(props) =>
        props.$layout !== 2 &&
        css`
            font-weight: 500;
            margin-block-end: 12px;
        `}
    ${(props) =>
        props.$layout === 2 &&
        css`
            font-weight: 600;
            margin-block-end: 2px;
            font-size: 18px;
        `}
`;

export const CategoryWrap = styled.p`
    color: ${themeGet("colors.primary")};
    margin-block-end: 2px;
`;

export const TextWrap = styled.p`
    color: ${themeGet("colors.text")};
    ${(props) =>
        props.$layout === 2 &&
        css`
            margin-block-start: 13px;
            margin-block-end: 0;
        `}
`;

export const BoxLargeImgBtnWrap = styled.div`
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
    border-block-start: 1px solid ${themeGet("colors.gray.400")};
    color: ${themeGet("colors.primary")};
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
    .mt-btn {
    }
`;

export const BoxLargeImgLink = styled(Anchor)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    opacity: 0;
    text-indent: -99999px;
`;

export const BoxLargeImgWrap = styled.div`
    transition: ${themeGet("transition")};
    height: 100%;
    box-shadow: ${themeGet("shadows.default")};
    ${space};
    &:hover {
        transform: translateY(-5px);
        h5 {
            color: ${themeGet("colors.primary")};
        }
        ${BoxLargeImgLink} {
            visibility: visible;
            opacity: 1;
        }
        ${BoxLargeImgBtnWrap} {
            &:before {
                transform: translateY(0);
            }
            a {
                color: #fff;
            }
        }
    }
`;
