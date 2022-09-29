import React from "react";
import styled, { space } from "@styled";
import { Container } from "react-bootstrap";

export const Containerwrap = styled(
    ({ p, px, py, pt, pb, pl, pr, m, mx, my, mt, mb, ml, mr, ...rest }) => (
        <Container {...rest} />
    )
)`
    ${space};
`;
