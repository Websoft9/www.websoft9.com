import styled, { css, themeGet } from "@styled";

export const SocialLinkWrap = styled.a`
    color: ${themeGet("colors.text")};
    position: relative;
    display: inline-block;
    &:not(:last-child) {
        margin-inline-end: ${(props) => props.$space};
    }
    ${(props) =>
        props.$size === "small" &&
        css`
            svg,
            i {
                height: 16px;
                width: 16px;
                font-size: 16px;
            }
        `}
    ${(props) =>
        props.$size === "medium" &&
        css`
            svg,
            i {
                width: 20px;
                height: 20px;
                font-size: 20px;
            }
        `}
    ${(props) =>
        props.$size === "large" &&
        css`
            svg,
            i {
                width: 25px;
                height: 25px;
                font-size: 25px;
            }
        `}
    ${(props) =>
        props.$variant === "flat" &&
        css`
            height: 48px;
            width: 48px;
            text-align: center;
            line-height: 48px;
            background: ${themeGet("colors.border")};
            svg,
            i {
                width: 18px;
                height: 18px;
                font-size: 18px;
            }
            &:hover {
                background: ${themeGet("colors.primary")};
                color: #fff;
            }
        `}
    ${({ $variant, $color }) =>
        $variant === "outlined" &&
        css`
            height: 48px;
            width: 48px;
            text-align: center;
            line-height: 46px;
            background: transparent;
            border: 1px solid ${themeGet("colors.border")};
            svg,
            i {
                width: 18px;
                height: 18px;
                font-size: 18px;
            }
            &:hover {
                background: ${themeGet("colors.primary")};
                color: #fff;
            }
            ${$color === "light" &&
            css`
                border-color: #fff;
                color: #fff;
                &:hover {
                    color: ${themeGet("colors.primary")};
                    background: #fff;
                }
            `}
        `}

    ${({ $variant, $color, $hover, $size }) =>
        $variant === "texted" &&
        css`
            padding: 0;
            border: none;
            background: transparent;
            ${$color === "light" &&
            css`
                color: #fff;
                ${!!$hover &&
                css`
                    &:hover {
                        color: ${$hover?.color || themeGet("colors.primary")};
                    }
                `}
            `}
            ${$size === "small" &&
            css`
                width: 16px;
                height: 16px;
                font-size: 16px;
            `}
        `}
    ${(props) =>
        props.$shape === "rounded" &&
        css`
            border-radius: ${themeGet("radii.round")};
        `}
    ${(props) =>
        props.$hastitle &&
        props.$variant !== "texted" &&
        css`
            display: inline-flex;
            align-items: center;
            .title {
                margin-inline-start: 10px;
                text-transform: capitalize;
            }
        `}
    ${(props) =>
        props.$tooltip &&
        css`
            .title {
                position: absolute;
                z-index: 1000000;
                pointer-events: none;
                text-transform: capitalize;
                bottom: 100%;
                visibility: hidden;
                opacity: 0;
                background: ${themeGet("colors.primary")};
                color: white;
                min-height: 30px;
                padding: 0 10px;
                line-height: 30px;
                font-size: 14px;
                white-space: nowrap;
                border-radius: ${themeGet("radii.md")};
                left: 50%;
                transform: translateX(-50%);
                box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
                transition: opacity 0.3s ease, visibility 0.3s ease,
                    transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24),
                    -webkit-transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24);
                &:after {
                    position: absolute;
                    content: "";
                    z-index: 1000000;
                    top: 100%;
                    background: transparent;
                    border: 7px solid transparent;
                    z-index: 1000001;
                    border-top-color: ${themeGet("colors.primary")};
                    left: calc(50% - 7px);
                }
            }
            &:hover {
                .title {
                    visibility: visible;
                    opacity: 1;
                    transform: translateX(-50%) translateY(-8px);
                }
            }

            ${(props) =>
                props.$tooltip_bg === "dark" &&
                css`
                    .title {
                        background: ${themeGet("colors.black")};
                        &:after {
                            border-top-color: ${themeGet("colors.black")};
                        }
                    }
                `}
            ${(props) =>
                props.$tooltip_bg === "secondary" &&
                css`
                    .title {
                        background: ${themeGet("colors.secondary")};
                        &:after {
                            border-top-color: ${themeGet("colors.secondary")};
                        }
                    }
                `}
            ${(props) =>
                props.$tooltip_position === "bottom-left" &&
                css`
                    .title {
                        bottom: auto;
                        left: 50%;
                        transform: translateX(-100%);
                        top: 100%;
                        left: 100%;
                        &:after {
                            border-bottom-color: ${themeGet("colors.primary")};
                            border-top-color: transparent;
                            top: auto;
                            bottom: 100%;
                            left: calc(100% - 20px);
                        }
                        ${(props) =>
                            props.$tooltip_bg === "dark" &&
                            css`
                                &:after {
                                    border-bottom-color: ${themeGet(
                                        "colors.black"
                                    )};
                                    border-top-color: transparent;
                                }
                            `}
                    }
                    &:hover {
                        .title {
                            transform: translateX(-100%) translateY(8px);
                        }
                    }
                `}
        `}

    ${({ $variant, $color }) =>
        $variant === "underlined" &&
        css`
            padding: 5px 8px;
            margin-inline-end: 0 !important;
            color: #333;
            &:not(:first-child) {
                &:before {
                    content: "-";
                    position: absolute;
                    top: 50%;
                    left: -5px;
                    transform: translateY(-50%);
                    color: #333;
                }
            }
            &:first-child {
                margin-inline-start: 0;
                padding-inline-start: 0;
                .title {
                    margin-inline-start: 0;
                }
            }
            .title {
                position: relative;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: 500;
                padding: 5px 0;
                z-index: 1;
                &:before {
                    content: "";
                    height: 2px;
                    bottom: 0;
                    position: absolute;
                    left: 0;
                    right: 0;
                    z-index: -2;
                    background: rgba(0, 0, 0, 0.2);
                }
                &:after {
                    content: "";
                    height: 2px;
                    width: 0;
                    bottom: 0;
                    position: absolute;
                    left: auto;
                    right: 0;
                    z-index: -1;
                    transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
                }
            }
            &:hover {
                .title {
                    &:after {
                        background-color: #d2a98e;
                        width: 100%;
                        left: 0;
                    }
                }
            }
            ${$color === "light" &&
            css`
                color: #ffffff;
                &:not(:first-child) {
                    &:before {
                        color: #ffffff;
                    }
                }
                .title {
                    &:before {
                        background-color: rgba(255, 255, 255, 0.7);
                    }
                }
                &:hover {
                    color: #ffffff;
                    .title {
                        &:after {
                            background-color: #ffffff;
                            width: 100%;
                            left: 0;
                        }
                    }
                }
            `}
        `}


    ${(props) =>
        props.$hover &&
        css`
            &:hover {
                color: ${(props) => props.$hover.color};
            }
        `}
`;
