import React from "react";
import styled, { css, themeGet, device, space, layout, flexbox } from "@styled";
import { fadeInDown } from "@assets/css/animations";

export const HeaderTop = styled.div`
    position: relative;
    border-bottom: 1px solid ${themeGet("colors.border")};
`;

export const HeaderMain = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    ${(props) =>
        props.top &&
        css`
            padding: 14px 0;
        `}
    ${(props) =>
        props.bottom &&
        css`
            justify-content: space-between;
        `}
`;

export const HeaderTopLeft = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    flex-basis: 50%;
    ${device.medium} {
        flex-basis: 20%;
    }
`;

export const HeaderTopRight = styled.div`
    flex-grow: 1;
    align-self: stretch;
    align-items: center;
    display: flex;
    justify-content: flex-end;
    flex-basis: 50%;
    max-width: 50%;
    ${device.medium} {
        flex-basis: 80%;
        max-width: 80%;
    }
`;

export const InfoItem = styled.div`
    display: flex;
    align-items: center;
    margin-block-start: 20px;
    margin-block-end: 10px;
    ${device.medium} {
        padding-inline-start: 15px;
        padding-inline-end: 15px;
        margin-block: 0;
    }
`;

export const InfoIcon = styled.div`
    width: 4-px;
    flex-shrink: 0;
    font-size: 30px;
    line-height: 1;
    margin-inline-end: 10px;
    color: ${themeGet("colors.secondary")};
`;

export const InfoContent = styled.div`
    flex-grow: 1;
`;

export const HeaderTopRightInner = styled.div`
    @media only screen and (max-width: 767px) {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        margin: auto;
        width: 100%;
        justify-content: center;
        padding: 20px;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.09);
        transform: translateY(30px);
        background-color: #ffffff;
        visibility: hidden;
        opacity: 0;
        transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
        flex-direction: column;
        z-index: 99;
        ${(props) =>
            props.isOpen &&
            css`
                visibility: visible;
                opacity: 1;
                transform: translateY(0);
            `}
    }
    ${device.medium} {
        display: flex;
        margin: 0 -12px;
        justify-content: flex-end;
        flex-shrink: 0;
        padding: 0 12px;
        align-items: center;
    }

    .header-top-info-slider-wrap {
        .swiper {
            cursor: w-resize;
            overflow: hidden;
            width: 100%;
            max-width: 280px;
            padding: 0;
            ${device.small} {
                max-width: 512px;
            }
            ${device.medium} {
                max-width: 280px;
                padding: 0 12px;
            }
            ${device.large} {
                max-width: 540px;
            }
            ${device.xlarge} {
                max-width: 760px;
            }
        }
        .swiper-slide-active {
            ${InfoItem} {
                border: none;
                ${device.medium} {
                    border-right: 1px solid ${themeGet("colors.borderDash")};
                }
            }
        }
        .swiper-slide-next {
            ${InfoItem} {
                border: none;
                ${device.medium} {
                    border-right: 1px solid ${themeGet("colors.borderDash")};
                }
            }
        }
    }
`;

export const HeaderBottomLeft = styled.div`
    flex-grow: 1;
`;
export const HeaderNavigation = styled.div`
    display: none;
    ${device.xlarge} {
        display: block;
    }
`;
export const HeaderBottomRight = styled.div`
    flex-shrink: 0;
    align-self: stretch;
    flex-grow: 1;
`;

export const HeaderElement = styled(
    ({ display, width, justifyContent, pl, ...rest }) => <div {...rest} />
)`
    height: 100%;
    display: flex;
    align-items: center;
    ${space};
    ${layout};
    ${flexbox};
`;

export const HeaderBottom = styled.div`
    background: #fff;
    position: relative;
    transition: ${themeGet("transition")};
    display: none;
    ${device.medium} {
        display: block;
    }
    ${device.large} {
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
                animation: 0.95s ease-in-out 0s normal none 1 running
                    ${fadeInDown};
                transition: ${themeGet("transition")};
            `}
    }
`;

export const HeaderWrap = styled.header`
    position: relative;
    ${(props) =>
        props.isSticky &&
        css`
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            animation: 0.95s ease-in-out 0s normal none 1 running ${fadeInDown};
            z-index: 999;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
            background-color: #fff;
        `}
    ${device.medium} {
        position: relative;
        box-shadow: none;
    }
`;

export const StyledInfoTitle = styled.h2`
    font-size: 14px;
    font-weight: 700;
    line-height: 1.18;
    margin-block-end: 6px;
`;

export const StyledInfoText = styled.p`
    font-size: 14px;
`;
