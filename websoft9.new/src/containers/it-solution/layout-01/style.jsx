import React from "react";
import styled, { device, color, themeGet } from "@styled";

export const SectionWrap = styled(({ bg, ...rest }) => <section {...rest} />)`
    background-color: ${themeGet("colors.gray.100")};
    padding-block: 60px;
    ${device.medium} {
        padding-block: 80px;
    }
    ${device.large} {
        padding-block: 100px;
    }
    ${color}
`;
