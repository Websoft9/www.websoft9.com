import React from "react";
import styled, { space, typography } from "@styled";
import { Col } from "react-bootstrap";

export const StyledCol = styled(
    ({
        p,
        px,
        py,
        pt,
        pb,
        pl,
        pr,
        m,
        mx,
        my,
        mt,
        mb,
        ml,
        mr,
        textAlign,
        width,
        height,
        display,
        justifyContent,
        alignItems,
        ...rest
    }) => <Col {...rest} />
)`
    ${space};
    ${typography};
`;
