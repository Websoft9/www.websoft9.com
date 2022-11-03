import styled, { css, device, themeGet } from "@styled";
import Anchor from "@ui/anchor";

export const StyledMainMenu = styled.nav`
    flex-grow: 1;
    display: flex;
    align-items: center;
    ${({ $alignment }) =>
        $alignment === "right" &&
        css`
            justify-content: flex-end;
        `}
    ${({ $alignment }) =>
        $alignment === "left" &&
        css`
            justify-content: flex-start;
        `}
    ${({ $alignment }) =>
        $alignment === "center" &&
        css`
            justify-content: center;
        `}
`;

export const StyledNavbar = styled.ul`
    display: flex;
`;

export const StyledNavitem = styled.li`
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

export const StyledSubmenu = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    box-shadow: 0 2px 29px rgba(0, 0, 0, 0.05);
    border-bottom: 3px solid ${themeGet("colors.primary")};
    background-color: #ffffff;
    transform: translateY(50px);
    transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 0.2s;
    transition-duration: 0.4s;
    visibility: hidden;
    opacity: 0;
    min-width: 240px;
    padding: 20px 0;
    z-index: 9;
`;

export const StyledMegamenu = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    box-shadow: 0 2px 29px rgba(0, 0, 0, 0.05);
    border-bottom: 3px solid ${themeGet("colors.primary")};
    background-color: #ffffff;
    transform: translateY(50px);
    transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 0.2s;
    transition-duration: 0.4s;
    visibility: hidden;
    opacity: 0;
    z-index: 9;

    min-width: 980px;
    width: 100%;
    //padding: 35px 20px 30px;
    display: flex;
    justify-content: space-around;

    & > li {
        width:40%;
        //flex-basis: 22%;
        padding-top: 20px;
        padding-left: 30px;
        padding-right: 15px;
        &:first-child{
            background-color: #F8F8F8;
            width:100%;
        }
    }
`;

export const StyledMegaTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 20px;
    color: ${themeGet("colors.heading")};
`;

export const HeroTextBox = styled.div`
    // max-width: 605px;
    width: 100%;
    padding-inline-start: 0;
    margin-block-start: 50px;
    margin-block-end: 20px;
    margin-inline: auto;
    text-align: center;

    ${device.medium} {
        padding-inline-start: 30px;
        margin-inline-start: auto;
        margin-inline-end: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        text-align: left;
    }
`;

export const StyledSubtitle = styled.h5`
    font-weight: 900;
    color: ${themeGet("colors.primary")};
    margin-block-end: 20px;
`;

export const MarkdownStyle = styled.div`
    h1 {font-size:34px};
    h2 {font-size:24px};
    h3 {font-size:18px};
    h4 {font-size:15px};
    ul {
        list-style-type:disc;
        list-style-position:inside;
    }
    table{
        border:solid #000 1px; 
        td {
            border:solid #000 1px;
        }
    }
`;