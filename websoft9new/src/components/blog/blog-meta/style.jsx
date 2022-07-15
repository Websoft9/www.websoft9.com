import React from "react";
import styled, { themeGet, space } from "@styled";

export const BlogMetaWrap = styled(({ mt, mb, ml, mr, ...rest }) => (
    <div {...rest} />
))`
    ${space}
    a {
        display: flex;
        align-items: center;
    }
    svg,
    i {
        margin-inline-end: 6px;
        color: ${(props) => props.color || themeGet("colors.text")};
    }
    span {
        color: ${(props) => props.color};
    }
`;
