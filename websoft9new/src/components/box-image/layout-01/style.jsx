import styled, { themeGet, device } from "@styled";
import { Link } from "gatsby";
import { boxImageAnimationSignal } from "@assets/css/animations";

export const BoxImgInner = styled.div`
    box-shadow: ${themeGet("shadows.md")};
    background: #fff;
    border-radius: ${themeGet("radii.md")};
    padding-block-start: 40px;
    padding-block-end: 44px;
    padding-inline: 20px;
    transition: ${themeGet("transition")};
    text-align: center;
    position: relative;
    ${device.small} {
        padding-block-start: 50px;
        padding-block-end: 63px;
        padding-inline: 30px;
    }
`;

export const BoxImgWrap = styled.figure`
    margin-block-end: 25px;
    ${device.small} {
        margin-block-end: 41px;
    }
    .gatsby-image-wrapper {
        margin-inline-start: auto;
        margin-inline-end: auto;
    }
`;

export const BoxContentWrap = styled.div`
    text-align: center;
`;

export const HeadingWrap = styled.h5`
    font-weight: 500;
    line-height: 1.25;
    margin-block-end: 12px;
`;

export const TextWrap = styled.p``;

export const BoxCircleBtnWrap = styled.div`
    height: 56px;
    width: 56px;
    position: absolute;
    left: 50%;
    bottom: -28px;
    transform: translateX(-50%);
    .middle-dot {
        pointer-events: none;
        content: "";
        position: absolute;
        top: -12px;
        left: -12px;
        width: 80px;
        height: 80px;
        border-radius: ${themeGet("radii.round")};
        border: 2px solid ${themeGet("colors.primary")};
        opacity: 0;
        transform-origin: 50% 50%;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        &.dot-2 {
            pointer-events: none;
            content: "";
            position: absolute;
            top: -12px;
            left: -12px;
            width: 80px;
            height: 80px;
            border-radius: ${themeGet("radii.round")};
            border: 2px solid ${themeGet("colors.primary")};
            opacity: 0;
            transform-origin: 50% 50%;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
        }
    }
`;

export const BoxCircleBtnInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const BoxCircleBtn = styled(Link)`
    position: absolute;
    top: 0;
    left: 0;
    width: 56px;
    height: 56px;
    line-height: 56px;
    text-align: center;
    border-radius: ${themeGet("radii.round")};
    font-size: 24px;
    color: #fff;
    background: ${themeGet("colors.secondary")};
    .icon {
        color: #fff;
    }
    &:hover {
        color: #fff;
    }
`;

export const BoxImgWrapper = styled.div`
    margin-block-end: 28px;
    &:hover {
        ${BoxCircleBtnWrap} {
            .middle-dot {
                animation: ${boxImageAnimationSignal}
                    cubic-bezier(0, 0.55, 0.55, 1) 2s;
                animation-iteration-count: 1;
                animation-fill-mode: none;
                animation-fill-mode: forwards;
                animation-iteration-count: infinite;
            }
        }
        ${BoxCircleBtn} {
            background: ${themeGet("colors.primary")};
        }
    }
`;
