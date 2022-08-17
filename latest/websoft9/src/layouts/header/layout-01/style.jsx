import styled, { css, themeGet, space, layout, border, device } from "@styled";
import { allowedTags } from "@utils";
import { fadeInDown } from "@assets/css/animations";
import Anchor from "@ui/anchor";

export const HeaderTop = styled.div`
    background: ${themeGet("colors.gray.100")};
    display: none;
    ${device.large} {
        display: block;
    }
`;

export const HeaderBottom = styled.div`
    position: relative;
    transition: ${themeGet("transition")};

    ${(props) =>
        props.isSticky &&
        css`
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            z-index: 999;
            background: #fff;
            box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
            animation: 0.95s ease-in-out 0s normal none 1 running ${fadeInDown};
            transition: ${themeGet("transition")};
            .search-btn {
                svg,
                i {
                    color: ${themeGet("colors.heading")} !important;
                }
            }
            .burger-btn {
                span {
                    background-color: ${themeGet("colors.heading")} !important;
                    &:before,
                    &:after {
                        background-color: ${themeGet(
                            "colors.heading"
                        )} !important;
                    }
                }
            }
        `}
`;

export const HeaderMain = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    ${(props) =>
        props.top &&
        css`
            height: 50px;
        `}
`;

export const HeaderCol = styled.div`
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    ${(props) =>
        props.left &&
        css`
            justify-content: flex-start;
        `}
    ${(props) =>
        props.right &&
        css`
            justify-content: flex-end;
        `}
`;

export const HeaderNavigation = styled.div`
    display: none;
    ${device.xlarge} {
        display: block;
    }
`;

export const HeaderElement = styled("div").withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        ![...allowedTags].includes(prop) && defaultValidatorFn(prop),
})`
    height: 100%;
    display: flex;
    align-items: center;
    ${space};
    ${layout};
    ${border};
`;

export const HeaderInfoItem = styled.div`
    font-size: 14px;
    &:first-of-type {
        margin-right: 20px;
    }
    svg,
    i {
        font-size: 14px;
        margin-inline-end: 6px;
        height: 17px;
        color: ${themeGet("colors.text")};
    }
`;

export const HeaderWrap = styled.header`
    .search-btn {
        line-height: 0;
        font-size: 18px;
        &:hover {
            transition: ${themeGet("transition")};
            transform: scale(1.15, 1.15);
        }
    }
    ${(props) =>
        props.$transparent &&
        css`
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            z-index: 30;
            ${HeaderTop} {
                background: transparent;
                border-bottom: 1px solid #fff;
            }
            ${HeaderInfoItem} {
                strong,
                svg,
                span,
                i {
                    color: #fff;
                }
            }
            .search-btn {
                svg,
                i {
                    color: #fff;
                }
            }
            .burger-btn {
                span {
                    background-color: #fff;
                    &:before,
                    &:after {
                        background-color: #fff;
                    }
                }
            }
        `}
`;

export const StyledTopText = styled.p`
    font-size: 14px;
    line-height: 1.78;
    span {
        font-weight: 700;
    }
    ${({ $transparent }) =>
        $transparent &&
        css`
            color: #fff;
        `}
    ${({ $transparent }) =>
        !$transparent &&
        css`
            color: ${themeGet("colors.text")};
        `}
`;

export const StyledNavitem = styled.li`
    list-style-type: none;
    ${({ $space }) =>
        $space === 1 &&
        css`
            margin: 0 10px;
            ${device.xxlarge} {
                margin: 0 20px;
            }
        `}

    ${({ $space }) =>
        $space === 2 &&
        css`
            margin: 0 20px;
        `}

    ${({ $alignment }) =>
        $alignment === "right" &&
        css`
            &:last-of-type {
                & > .submenu {
                    ${device.large} {
                        left: auto;
                        right: 0;
                    }
                    ${device.xxlarge} {
                        left: 0;
                        right: auto;
                    }
                }
            }
        `}

    ${({ $subitem }) =>
        !$subitem &&
        css`
            &:first-of-type {
                margin-left: 0;
            }
        `}
    &:hover {
        & > .submenu,
        & > .megamenu {
            transform: translateY(0);
            visibility: visible;
            opacity: 1;
        }
    }
    ${({ $subitem }) =>
        $subitem &&
        css`
            margin: 9px 30px;
        `}
    ${({ $megitem }) =>
        $megitem &&
        css`
            margin: 9px 0;
        `}
    ${({ hasSubmenu }) =>
        hasSubmenu &&
        css`
            position: relative;
        `}
`;

export const StyledNavlink = styled(Anchor)`
    display: block;
    padding-inline: 2px;
    padding-block: 29px;
    position: relative;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.18;
    transition: all 0s ease-in-out;
    

    ${({ $bottomLine }) =>
        $bottomLine &&
        css`
            &:before {
                content: "";
                width: 0;
                height: 3px;
                bottom: 0;
                position: absolute;
                left: 0;
                transition: all 0.3s ease-in-out;
            }
            &:hover {
                &:before {
                    width: 100%;
                    left: 0;
                }
            }
        `}
    ${({ $color }) =>
        $color === "light" &&
        css`
            color: rgba(255, 255, 255, 0.7);
            &:before {
                background-color: #ffffff;
            }
            &:hover {
                color: #ffff;
            }
        `}
    ${({ $color }) =>
        $color === "white" &&
        css`
            color: #ffffff;
            &:before {
                background-color: #ffffff;
            }
            &:hover {
                color: #ffffff;
            }
        `}
    ${({ $color }) =>
        $color === "dark" &&
        css`
            color: #000;
            &:before {
                background-color: ${themeGet("colors.primary")};
            }
            &:hover {
                color: ${themeGet("colors.primary")};
            }
        `}
    ${({ $vSpace }) =>
        $vSpace === 2 &&
        css`
            padding-block: 21px;
        `}
    .icon {
        font-size: 14px;
        margin-left: 5px;
    }
    ${({ $sublink }) =>
        $sublink &&
        css`
            display: inline-block;
            padding: 0;
            padding-bottom: 4px;
            color: #ababab;
            font-weight: 400;
            transition: 0s;
            &:before {
                background-color: ${themeGet("colors.primary")};
                height: 1px;
            }
            &:hover {
                color: ${themeGet("colors.primary")};
            }
        `}
`;
