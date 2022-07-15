import React from "react";
import styled, { themeGet, space } from "@styled";

export const TagWrapper = styled(({ mb, mt, mr, ml, ...rest }) => (
    <div {...rest} />
))`
    display: flex;
    align-items: center;
    ${space};
    a {
        color: ${themeGet("colors.silver")};
        font-size: 13px;
        padding-inline-end: 3px;
    }
    .icon {
        font-size: 18px;
        padding-inline-end: 9px;
        color: ${themeGet("colors.text")};
    }
`;
