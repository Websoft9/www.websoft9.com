import React from "react";
import styled, { space, device, themeGet } from "@styled";

export const FooterWrap = styled.footer`
    background-color: ${themeGet("colors.gray.100")};
`;

export const FooterTop = styled.div`
    padding-block-start: 40px;
    padding-block-end: 40px;
    ${device.medium} {
        padding-block-start: 60px;
        padding-block-end: 60px;
    }
    ${device.large} {
        padding-block-start: 80px;
        padding-block-end: 80px;
    }
`;

export const FooterBottom = styled.div`
    padding-block-end: 30px;
`;

export const FooterWidget = styled(
    ({ mt, mb, ml, mr, pt, pb, pl, pr, ...rest }) => <div {...rest} />
)`
    ${space};
`;

export const LogoWidget = styled.figure`
    margin-block-end: 30px;
`;

export const TextWidget = styled.div``;

export const FooterWidgetList = styled.ul`
    li {
        &:not(:last-child) {
            margin-block-end: 10px;
        }
    }
`;
