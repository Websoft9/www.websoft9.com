/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import styled, {
    css,
    space,
    typography,
    layout,
    flexbox,
    color,
    border,
    themeGet,
    device,
} from "@styled";
import { Link } from "gatsby";

const ButtonStyled = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    cursor: pointer;
    line-height: 1.5;
    user-select: none;
    border-style: solid;
    transform: translateY(0px);
    transition: all 0.3s;

    .btn-icon {
        display: inline-block;
        vertical-align: middle;
        line-height: 0.5;
        svg,
        i {
            font-size: ${(props) => props.$iconsize};
        }
        ${(props) =>
            props.$iconposition === "right" &&
            css`
                margin-left: ${(props) => props.$icondistance};
            `}
        ${(props) =>
            props.$iconposition === "left" &&
            css`
                margin-right: ${(props) => props.$icondistance};
            `}
    }

    &:not(:disabled) {
        ${({ $disableHover }) =>
            !$disableHover &&
            css`
                &:hover,
                &:active,
                &:focus {
                    transform: translateY(-3px);
                }
            `}
    }

    ${(props) =>
        props.$fullwidth &&
        css`
            display: block;
            width: 100%;
        `}

    ${({ $shape }) =>
        $shape === "rounded" &&
        css`
            border-radius: ${themeGet("radii.md")};
        `}
    ${({ $shape }) =>
        $shape === "circle" &&
        css`
            border-radius: ${themeGet("radii.round")};
        `}

    ${({ $shape }) =>
        $shape === "ellipse" &&
        css`
            border-radius: 35px;
        `}

    ${({ $shape }) =>
        $shape === "square" &&
        css`
            border-radius: 0;
        `}

    ${({ $variant, $size }) =>
        ($variant === "contained" || $variant === "outlined") &&
        css`
            border-width: 1px;
            ${$size === "xsmall" &&
            css`
                height: 40px;
                line-height: 38px;
                font-size: 13px;
                padding: 0 20px;
            `}
            ${$size === "small" &&
            css`
                padding: 0 30px;
                height: 48px;
                line-height: 46px;
                font-size: 14px;
            `}
            ${$size === "medium" &&
            css`
                font-size: 14px;
                font-weight: 500;
                line-height: 50px;
                height: 50px;
                padding: 0 25px;
                ${device.medium} {
                    padding: 0 30px;
                    line-height: 54px;
                    height: 54px;
                    font-size: 15px;
                }
                ${device.xlarge} {
                    padding: 0 36px;
                }
            `}
            ${$size === "large" &&
            css`
                font-size: 14px;
                font-weight: 500;
                line-height: 55px;
                height: 55px;
                padding: 0 25px;
                ${device.medium} {
                    padding: 0 30px;
                    line-height: 64px;
                    height: 64px;
                    font-size: 16px;
                }
                ${device.xlarge} {
                    padding: 0 40px;
                }
            `}
        `}

    ${({ $variant, $color, $hoverStyle }) =>
        ($variant === "contained" || $variant === "onlyIcon") &&
        css`
            ${$color === "primary" &&
            css`
                background-color: ${themeGet("colors.primary")};
                border-color: ${themeGet("colors.primary")};
                color: #fff;
                &:hover,
                &:focus,
                &:active {
                    color: #fff;
                }
                ${$hoverStyle === "two" &&
                css`
                    &:hover,
                    &:focus,
                    &:active {
                        background-color: #fff;
                        border-color: #fff;
                        color: ${themeGet("colors.primary")};
                    }
                `}
            `}
            ${$color === "secondary" &&
            css`
                color: #fff;
                background: ${themeGet("colors.secondary")};
                border-color: ${themeGet("colors.secondary")};
                &:hover,
                &:active,
                &:focus {
                    color: #fff;
                }
                ${$hoverStyle === "two" &&
                css`
                    &:hover,
                    &:focus,
                    &:active {
                        background-color: #fff;
                        border-color: #fff;
                        color: ${themeGet("colors.secondary")};
                    }
                `}

                ${$hoverStyle === "three" &&
                css`
                    &:hover,
                    &:focus,
                    &:active {
                        background-color: ${themeGet("colors.primary")};
                        border-color: ${themeGet("colors.primary")};
                    }
                `}
            `}
            ${$color === "light" &&
            css`
                background-color: #fff;
                border-color: #fff;
                color: #000;
                ${({ $disableHover }) =>
                    !$disableHover &&
                    css`
                        &:hover,
                        &:active,
                        &:focus {
                            color: #000;
                        }
                    `}
                ${$hoverStyle === "two" &&
                css`
                    &:hover,
                    &:focus,
                    &:active {
                        background-color: ${themeGet("colors.secondary")};
                        border-color: ${themeGet("colors.secondary")};
                        color: #fff;
                    }
                `}
                ${$hoverStyle === "three" &&
                css`
                    &:hover,
                    &:focus,
                    &:active {
                        background-color: ${themeGet("colors.primary")};
                        border-color: ${themeGet("colors.primary")};
                        color: #fff;
                    }
                `}
            `}
            ${$color === "white" &&
            css`
                background-color: #fff;
                border-color: #fff;
                color: ${themeGet("colors.primary")};
                ${$hoverStyle === "two" &&
                css`
                    &:hover,
                    &:focus,
                    &:active {
                        background-color: ${themeGet("colors.secondary")};
                        border-color: ${themeGet("colors.secondary")};
                        color: #fff;
                    }
                `}
                ${$hoverStyle === "three" &&
                css`
                    &:hover,
                    &:focus,
                    &:active {
                        background-color: ${themeGet("colors.primary")};
                        border-color: ${themeGet("colors.primary")};
                        color: #fff;
                    }
                `}
            `}
            ${$color === "dark" &&
            css`
                background-color: #000;
                border-color: #000;
                color: #fff;
                ${({ $disableHover }) =>
                    !$disableHover &&
                    css`
                        &:hover,
                        &:active,
                        &:focus {
                            color: #fff;
                        }
                    `}
                ${$hoverStyle === "two" &&
                css`
                    &:hover,
                    &:focus,
                    &:active {
                        background-color: ${themeGet("colors.secondary")};
                        border-color: ${themeGet("colors.secondary")};
                        color: #fff;
                    }
                `}
                ${$hoverStyle === "three" &&
                css`
                    &:hover,
                    &:focus,
                    &:active {
                        background-color: ${themeGet("colors.primary")};
                        border-color: ${themeGet("colors.primary")};
                        color: #fff;
                    }
                `}
            `}
            ${$color === "gradient" &&
            css`
                background-image: linear-gradient(
                    150deg,
                    #ff3f85 0,
                    #faa720 100%
                );
                border-color: transparent;
                color: #fff;
                ${({ $disableHover }) =>
                    !$disableHover &&
                    css`
                        &:hover,
                        &:active,
                        &:focus {
                            color: #fff;
                        }
                    `}
                ${$hoverStyle === "two" &&
                css`
                    &:hover,
                    &:focus,
                    &:active {
                        background-color: ${themeGet("colors.secondary")};
                        border-color: ${themeGet("colors.secondary")};
                        color: #fff;
                    }
                `}
                ${$hoverStyle === "three" &&
                css`
                    &:hover,
                    &:focus,
                    &:active {
                        background-color: ${themeGet("colors.primary")};
                        border-color: ${themeGet("colors.primary")};
                        color: #fff;
                    }
                `}
            `}
        `}

    ${({ $variant, $color, $disableHover }) =>
        $variant === "outlined" &&
        css`
            background-color: transparent;
            ${$color === "primary" &&
            css`
                border-color: ${themeGet("colors.primary")};
                color: ${themeGet("colors.primary")};

                ${!$disableHover &&
                css`
                    &:hover,
                    &:focus,
                    &:active {
                        color: #fff;
                        background-color: ${themeGet("colors.primary")};
                    }
                `}
            `}
            ${$color === "light" &&
            css`
                border-color: ${themeGet("colors.border")};
                color: ${themeGet("colors.text")};

                ${!$disableHover &&
                css`
                    &:hover,
                    &:focus,
                    &:active {
                        color: #fff;
                        background-color: ${themeGet("colors.primary")};
                    }
                `}
            `}
        `}

    ${({ $variant, $color, $size }) =>
        $variant === "texted" &&
        css`
            background-color: transparent;
            border: none;
            padding: 0;
            border-radius: 0;
            ${$color === "primary" &&
            css`
                color: ${themeGet("colors.primary")};
                &:hover {
                    color: ${themeGet("colors.secondary")};
                }
            `}
            ${$color === "secondary" &&
            css`
                color: ${themeGet("colors.secondary")};
                &:hover {
                    color: ${themeGet("colors.primary")};
                }
            `}
            ${$color === "light" &&
            css`
                color: #fff;
                &:hover {
                    color: #fff;
                }
            `}
            ${$color === "dark" &&
            css`
                color: #000;
                &:hover {
                    color: #000;
                }
            `}
            ${$size === "medium" &&
            css`
                font-size: 14px;
            `}
            ${$size === "large" &&
            css`
                font-size: 18px;
            `}
        `}

    ${({ $variant, $size }) =>
        $variant === "onlyIcon" &&
        css`
            padding: 0;
            border: none;
            ${$size === "medium" &&
            css`
                width: 48px;
                height: 48px;
                line-height: 50px;
                svg,
                i {
                    margin: 0;
                    font-size: 20px;
                }
            `}
        `}

    ${(props) =>
        props.disabled &&
        css`
            opacity: 0.5;
            cursor: not-allowed;
        `}

    ${({ $shadow }) =>
        $shadow &&
        css`
            box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.07);
        `}
    ${({ $imgbutton }) =>
        $imgbutton &&
        css`
            background: none;
            border: none;
            padding: 0;
            height: auto;
            line-height: 1;
            ${device.medium} {
                padding: 0;
                line-height: 1;
                height: auto;
            }
            img {
                border-radius: ${themeGet("radii.md")};
            }
        `}
    ${space};
    ${typography};
    ${layout};
    ${flexbox};
    ${color};
    ${border};
`;

export const ButtonWrap = styled(
    ({
        p,
        px,
        py,
        pt,
        pb,
        pl,
        pr,
        m,
        mx,
        my,
        mt,
        mb,
        ml,
        mr,
        color,
        fontFamily,
        fontSize,
        fontWeight,
        lineHeight,
        letterSpacing,
        textAlign,
        width,
        height,
        display,
        borderWidth,
        borderColor,
        borderStyle,
        border,
        minWidth,
        justifyContent,
        alignItems,
        ...rest
    }) => <button {...rest} />
)`
    ${ButtonStyled};
`;

export const AnchorButton = styled(
    ({
        p,
        px,
        py,
        pt,
        pb,
        pl,
        pr,
        m,
        mx,
        my,
        mt,
        mb,
        ml,
        mr,
        color,
        fontFamily,
        fontSize,
        fontWeight,
        lineHeight,
        letterSpacing,
        textAlign,
        width,
        height,
        display,
        borderWidth,
        borderColor,
        borderStyle,
        border,
        minWidth,
        justifyContent,
        alignItems,
        ...rest
    }) => <a {...rest} />
)`
    ${ButtonStyled}
`;

export const HashButton = styled(
    ({
        p,
        px,
        py,
        pt,
        pb,
        pl,
        pr,
        m,
        mx,
        my,
        mt,
        mb,
        ml,
        mr,
        color,
        fontFamily,
        fontSize,
        fontWeight,
        lineHeight,
        letterSpacing,
        textAlign,
        width,
        height,
        display,
        borderWidth,
        borderColor,
        borderStyle,
        border,
        minWidth,
        justifyContent,
        alignItems,
        ...rest
    }) => <a {...rest} />
)`
    ${ButtonStyled}
`;

export const LinkButton = styled(
    ({
        p,
        px,
        py,
        pt,
        pb,
        pl,
        pr,
        m,
        mx,
        my,
        mt,
        mb,
        ml,
        mr,
        color,
        fontFamily,
        fontSize,
        fontWeight,
        lineHeight,
        letterSpacing,
        textAlign,
        width,
        height,
        display,
        borderWidth,
        borderColor,
        borderStyle,
        border,
        minWidth,
        justifyContent,
        alignItems,
        ...rest
    }) => <Link {...rest} />
)`
    ${ButtonStyled}
`;
