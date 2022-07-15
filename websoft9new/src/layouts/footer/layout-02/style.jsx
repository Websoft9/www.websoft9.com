import React from "react";
import styled, { space, device, themeGet } from "@styled";

export const FooterWrap = styled.footer`
    background-color: #000;
`;

export const FooterTop = styled.div`
    .row {
        padding-block-start: 40px;
        padding-block-end: 40px;
        ${device.medium} {
            padding-block-start: 60px;
        }
        ${device.large} {
            padding-block-start: 80px;
        }
        border-bottom: 1px solid ${themeGet("colors.border")};
    }
`;

export const FooterBottom = styled.div`
    padding-block: 30px;
    text-align: center;
`;

export const FooterWidget = styled(
    ({ mt, mb, ml, mr, pt, pb, pl, pr, ...rest }) => <div {...rest} />
)`
    color: #fff;
    ${space};
`;

export const LogoWidget = styled.figure`
    margin-block-end: 30px;
`;

export const FooterWidgetList = styled.ul`
    li {
        &:not(:last-child) {
            margin-block-end: 10px;
        }
    }
`;

export const StyledWidgetTitle = styled.h6`
    color: #fff;
    margin-bottom: 20px;
    margin-top: -3px;
`;
