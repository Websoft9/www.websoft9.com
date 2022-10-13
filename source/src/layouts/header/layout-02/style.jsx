import styled, { css, themeGet, space, layout, border, device } from "@styled";
import { allowedTags } from "@utils";
import { fadeInDown } from "@assets/css/animations";
import Anchor from "@ui/anchor";

export const HeaderWrap = styled.header`
    border-color: #e4e8f6;
    position: relative;
    z-index: 999;
    box-shadow: 0 10px 15px rgb(0 0 0 / 5%);
`;

export const HeaderTop = styled.div`
    padding-inline: 15px;
    ${(props) =>
        props.borderBottom &&
        css`
            border-bottom: 1px solid ${themeGet("colors.border")};
        `}
`;

export const StyledTopText = styled.p`
    font-size: 14px;
    text-align: center;
    line-height: 1.78;
    padding-block-start: 10px;
    padding-block-end: 10px;
    span {
        font-weight: 500;
        color: ${themeGet("colors.primary")};
    }
`;

export const HeaderBottom = styled.div`
    position: relative;
    transition: ${themeGet("transition")};
    padding: 0 15px;
    ${(props) =>
        props.isSticky &&
        css`
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            z-index: 999;
            background: #fff;
            z-index: 1;
            box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
            animation: 0.95s ease-in-out 0s normal none 1 running ${fadeInDown};
            transition: ${themeGet("transition")};
        `}
`;

export const HeaderMain = styled.div`
    display: flex;
    position: relative;
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

export const HeaderLeft = styled.div`
    flex-basis: 50%;
    justify-content: center;
    padding: 14px 0;
    ${device.medium} {
        flex-basis: 50%;
    }
    ${device.xlarge} {
        flex-basis: 15%;
    }
    ${device.xxlarge} {
        flex-basis: 15%;
    }
    ${device.xxxlarge} {
        flex-basis: 19%;
    }
`;

export const HeaderMiddle = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: left;
    align-items: center;
`;
export const HeaderRight = styled.div`
    flex-shrink: 0;
    flex-basis: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    // ${device.medium} {
    //     flex-basis: 80%;
    // }
    // ${device.xlarge} {
    //     flex-basis: 70%;
    // }
    // ${device.xxlarge} {
    //     flex-basis: 60%;
    // }
    // ${device.xxxlarge} {
    //     flex-basis: 50%;
    // }
`;

export const HeaderNavigation = styled.div`
    display: none;
    ${device.xlarge} {
        display: block;
    }
`;
export const HeaderRightInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    @media only screen and (max-width: 1200px) {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        margin: auto;
        width: 100%;
        padding: 20px;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.09);
        background-color: #ffffff;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        visibility: hidden;
        opacity: 0;
        transform: translateY(30px);
        z-index: 9;
        height: auto;
        flex-direction: column;
        ${(props) =>
            props.isOpen &&
            css`
                visibility: visible;
                opacity: 1;
                transform: translateY(0);
            `}
    }
`;

export const HeaderElement = styled("div").withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        ![...allowedTags].includes(prop) && defaultValidatorFn(prop),
})`
    height: 100%;
    display: flex;
    align-items: center;
    font-size:16px;
    ${space};
    ${layout};
    ${border};
`;

// export const FixedHeaderHeight = styled.div`
//     height: ${(props) => props.height}px;
// `;



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
    color:#000000;
    //line-height: 1.18;
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
            // color: #ababab;
            font-weight: 500;
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