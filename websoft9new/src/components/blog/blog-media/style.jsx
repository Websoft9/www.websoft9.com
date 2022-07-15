import React from "react";
import styled, { space, themeGet } from "@styled";

export const StyledMedia = styled(({ mb, mt, ...rest }) => <div {...rest} />)`
    ${space}
`;

export const StyledThumb = styled.figure`
    img {
        border-radius: ${themeGet("radii.md")};
    }
`;
