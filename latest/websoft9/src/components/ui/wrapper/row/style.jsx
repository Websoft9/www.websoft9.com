import React from "react";
import styled, { css, space, flexbox, typography, device } from "@styled";
import { Row } from "react-bootstrap";

export const StyledRow = styled(
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
    }) => <Row {...rest} />
)`
    ${space};
    ${flexbox};
    ${typography};

    ${(props) =>
        props.$gutters &&
        css`
            ${(props) =>
                props.$gutters.xl &&
                css`
                    ${device.xlarge} {
                        margin-inline-end: ${(props) =>
                            (props.$gutters.xl / 2) * -1}px;
                        margin-inline-start: ${(props) =>
                            (props.$gutters.xl / 2) * -1}px;
                        & > [class*="col"] {
                            padding-inline-end: ${(props) =>
                                props.$gutters.xl / 2}px;
                            padding-inline-start: ${(props) =>
                                props.$gutters.xl / 2}px;
                        }
                    }
                `}
            ${(props) =>
                props.$gutters.lg &&
                css`
                    ${device.large} {
                        margin-inline-end: ${(props) =>
                            (props.$gutters.lg / 2) * -1}px;
                        margin-inline-start: ${(props) =>
                            (props.$gutters.lg / 2) * -1}px;
                        & > [class*="col"] {
                            padding-inline-end: ${(props) =>
                                props.$gutters.lg / 2}px;
                            padding-inline-start: ${(props) =>
                                props.$gutters.lg / 2}px;
                        }
                    }
                `}
        `}
`;
