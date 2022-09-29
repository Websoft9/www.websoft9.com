import React from "react";
import styled, { css, themeGet, space } from "@styled";
import Anchor from "@ui/anchor";

export const PaginationWrap = styled(({ mb, mt, ...rest }) => (
    <nav {...rest} />
))`
    justify-content: center;
    ${space}
`;

export const PaginationList = styled.ul`
    padding: 0;
    margin: 0;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
`;

export const PaginationItem = styled.li`
    display: inline-block;
    list-style-type: none;
`;

export const PaginationLink = styled(Anchor)`
    padding-inline: 10px;
    display: block;
    text-align: center;
    line-height: 41px;
    min-width: 41px;
    height: 41px;
    text-transform: uppercase;
    color: ${themeGet("colors.silver")};
    letter-spacing: 2px;
    border-radius: ${themeGet("radii.md")};
    ${(props) =>
        props.active &&
        css`
            background: ${themeGet("colors.spring")};
            color: ${themeGet("colors.primary")};
        `}
    ${(props) =>
        props.disabled &&
        css`
            display: none;
        `}
`;
