import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { space, typography } from "styled-system";

export const CategroiesWrap = styled(({ mb, mt, textAlign, ...rest }) => (
    <div {...rest} />
))`
    ${space};
    ${typography};
    a {
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: ${themeGet("colors.secondary")};
        text-transform: uppercase;
        &:not(:last-child) {
            margin-inline-end: 5px;
        }
    }
`;
