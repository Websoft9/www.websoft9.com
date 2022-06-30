import styled, { css, themeGet, space } from "@styled";
import { ListItemWrap } from "./list-item/style";

export const ListWrap = styled.ul`
    list-style: outside none none;
    padding: 0;
    ${space}
    ${(props) =>
        props.as === "ol" &&
        css`
            min-width: 45px;
            margin: 0;
            padding-inline-start: 30px;
            list-style: ${(props) => props.$liststyle || "decimal"};
        `}
    ${(props) =>
        props.child &&
        css`
            ${ListItemWrap} {
                font-weight: ${(props) => props.child.fontweight};
                font-size: ${(props) => props.child.fontSize};
                margin-block-end: ${(props) => props.child.mb};
                ${(props) =>
                    props.child.color === "text" &&
                    css`
                        color: ${themeGet("colors.text")};
                        a {
                            color: ${themeGet("colors.text")};
                        }
                    `}
            }
        `}
    ${ListItemWrap} {
        &:last-child {
            margin-block-end: 0;
            padding-block-end: 0;
        }
        ${(props) =>
            props.$layout === "separator" &&
            css`
                position: relative;
                margin-block-end: 6px;
                padding-block-end: 6px;
                &:before {
                    position: absolute;
                    bottom: 0px;
                    left: 0;
                    content: "";
                    height: 1px;
                    width: 100%;
                    background: ${themeGet("colors.gray.400")};
                }
                &:last-child {
                    &:before {
                        display: none;
                    }
                }
            `}
        ${(props) =>
            props.$layout === "check" &&
            css`
                position: relative;
                margin-block-end: 10px;
                .icon {
                    color: ${themeGet("colors.primary")};
                    font-size: 14px;
                    margin-inline-end: 15px;
                }
            `}
        ${(props) =>
            props.$layout === "circle" &&
            css`
                position: relative;
                padding-inline-start: 14px;
                margin-block-end: 12px;
                &:before {
                    content: "";
                    position: absolute;
                    top: 8px;
                    left: 0;
                    display: block;
                    width: 5px;
                    height: 5px;
                    border-radius: ${themeGet("radii.round")};
                    background: #999;
                }
            `}
        ${(props) =>
            props.$layout === "icon" &&
            css`
                position: relative;
                margin-block-end: 12px;
                .icon {
                    color: ${themeGet("colors.primary")};
                    font-size: 16px;
                    margin-inline-end: 10px;
                }
            `}
        ${(props) =>
            props.$layout === "order-list" &&
            css`
                position: relative;
                padding-inline-start: 0px;
                margin-block-end: 12px;
                font-size: 24px;
                color: ${themeGet("colors.heading")};
                line-height: 1.2;
                font-weight: 400;
            `}
        ${(props) =>
            props.$layout === "animated-arrow" &&
            css`
                position: relative;
                padding-inline-start: 30px;
                &:before,
                &:after {
                    content: "\f30b";
                    position: absolute;
                    top: 4px;
                    left: 0;
                    line-height: 1;
                    font-family: "Font Awesome 5 Pro";
                    font-weight: 900;
                    transition: ${themeGet("transition")};
                }
                &:before {
                    color: ${themeGet("colors.primary")};
                    opacity: 0;
                    visibility: hidden;
                    transform: translateX(-100%);
                }
                &:after {
                    color: ${themeGet("colors.text")};
                }
                &:hover {
                    &:after {
                        opacity: 0;
                        visibility: hidden;
                        transform: translateX(100%);
                    }
                    &:before {
                        opacity: 1;
                        visibility: visible;
                        transform: translateX(0);
                    }
                }
            `}
    }
`;
