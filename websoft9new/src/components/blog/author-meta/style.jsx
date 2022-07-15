import React from "react";
import styled, { space, themeGet } from "@styled";

export const AuthorMetaWrap = styled(({ mb, mt, mr, ml, ...rest }) => (
    <div {...rest} />
))`
    ${space};
    a {
        display: flex;
        align-items: center;
        .gatsby-image-wrapper {
            border-radius: ${themeGet("radii.round")};
            width: 40px;
            height: 40px;
        }
        span {
            margin-inline-start: 8px;
            color: ${(props) => props.color};
        }
    }
`;
