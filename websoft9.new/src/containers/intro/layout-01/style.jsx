import styled, { device, themeGet } from "@styled";

export const StyledSection = styled.section`
    padding-block-start: 53px;
    ${device.medium} {
        padding-block-start: 72px;
    }
    ${device.large} {
        padding-block-start: 96px;
    }
`;

export const StyledTitle = styled.h3`
    font-size: 24px;
    margin-block-end: 20px;
    span {
        color: ${themeGet("colors.primary")};
    }

    ${device.medium} {
        margin-block-end: 0;
        font-size: 28px;
    }
    ${device.large} {
        font-size: 30px;
    }
    ${device.xlarge} {
        font-size: 38px;
    }
`;

export const StyledMarkHeading = styled.h5`
    position: relative;
    padding-inline-start: 34px;
    line-height: 1.67;
    font-weight: 800;
    span {
        color: ${themeGet("colors.primary")};
    }
    &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0px;
        width: 4px;
        height: 94%;
        transform: translateY(-50%);
        background-color: ${themeGet("colors.secondary")};
    }
`;

export const StyledText = styled.p`
    margin-block-start: 15px;
    font-size: 18px;
    margin-inline-start: 34px;
    color: ${themeGet("colors.text")};
`;
