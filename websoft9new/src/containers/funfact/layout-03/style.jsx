import React from "react";
import styled, { themeGet, device, color } from "@styled";

export const SectionWrap = styled(({ bg, ...rest }) => <section {...rest} />)`
    padding-block-start: 60px;
    padding-block-end: 25px;
    ${device.medium} {
        padding-block-start: 80px;
        padding-block-end: 45px;
    }
    ${device.large} {
        padding-block-start: 120px;
        padding-block-end: 105px;
    }
    ${color};
`;

export const HeaderWrap = styled.div`
    margin-block-end: 20px;
    ${device.medium} {
        margin-inline-end: 3rem;
        margin-block-end: 0;
    }
`;

export const StyledHeading = styled.h3`
    margin-block-start: 25px;
    font-size: 24px;

    ${device.large} {
        font-size: 30px;
    }
    ${device.xlarge} {
        font-size: 38px;
    }
    span {
        color: ${themeGet("colors.primary")};
    }
`;
