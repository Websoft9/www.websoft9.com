import styled, { css } from "@styled";
import Anchor from "@ui/anchor";

export const StyledMobileMenu = styled.nav``;

export const StyledNavbar = styled.ul`
    flex-direction: column;
`;

export const StyledNavitem = styled.li`
    position: relative;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    &:hover {
        & > a {
            color: #fff;
        }
    }
    &.submenu-open {
        & > .submenu,
        & > .megamenu {
            max-height: 1000px;
            visibility: visible;
            opacity: 1;
            padding-block-start: 12px;
            padding-block-end: 10px;
            pointer-events: visible;
        }
    }
    ${({ $inSubmenu }) =>
        $inSubmenu &&
        css`
            &:last-of-type {
                border: none;
            }
        `}
`;

export const StyledButton = styled.button`
    position: absolute;
    right: 0;
    top: 12px;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
    border: none;
    padding: 0;
    &:hover {
        i {
            color: #fff;
        }
    }
    ${({ $inSubmenu }) =>
        $inSubmenu &&
        css`
            top: 50%;
            transform: translateY(-50%);
            width: 30px;
            height: 30px;
            line-height: 30px;
            right: 0px;
        `}
`;

export const StyledNavlink = styled(Anchor)`
    display: block;
    color: #ffffff;
    padding: 18px 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    span {
        padding: 0;
    }
    ${({ $inSubmenu }) =>
        $inSubmenu &&
        css`
            font-size: 15px;
            color: rgba(255, 255, 255, 0.7);
            font-weight: 500;
            padding: 10px 0px;
        `}
`;

const submenuStyles = css`
    position: relative;
    min-width: 100%;
    padding-block-start: 0;
    padding-block-end: 0;
    padding-inline-start: 14px;
    padding-inline-end: 0;
    background-color: transparent;
    top: auto;
    left: 0;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.05);
    border-bottom: none;
    transform: translateY(0);
    max-height: 0;
    overflow-y: hidden;
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    transform-origin: top;
    z-index: 99;
`;

export const StyledSubmenu = styled.ul`
    ${submenuStyles};
`;

export const StyledMegamenu = styled.ul`
    ${submenuStyles};
`;

export const StyledMegatitle = styled.h2`
    padding: 10px 0px;
    position: relative;
    line-height: 2;
    color: rgb(255, 255, 255);
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 0px;
`;
