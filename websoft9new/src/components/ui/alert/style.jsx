import React from "react";
import styled, { space, device, themeGet } from "@styled";
import Alert from "react-bootstrap/Alert";

export const AlertWrap = styled(
    ({ mt, mb, ml, mr, pt, pb, pl, pr, ...rest }) => <Alert {...rest} />
)`
    font-weight: 500;
    border-radius: ${themeGet("radii.md")};
    padding: 22px 25px 22px 40px;
    ${space};
    ${device.large} {
        padding: 27px 30px 27px 50px;
    }
    .icon {
        margin-inline-end: 10px;
    }
`;
