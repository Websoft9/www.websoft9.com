import React from "react";
import styled, { space } from "@styled";

export const StyledWrapper = styled(
    ({ p, px, py, pt, pb, pl, pr, m, mx, my, mt, mb, ml, mr, ...rest }) => (
        <div {...rest} />
    )
)`
    ${space};
`;
