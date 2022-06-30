import styled, { device, themeGet } from "@styled";

export const StyledSection = styled.section`
    padding-block-start: 55px;
    padding-block-end: 60px;
    ${device.medium} {
        padding-block-start: 75px;
        padding-block-end: 80px;
    }
    ${device.large} {
        padding-block-start: 100px;
        padding-block-end: 100px;
    }
`;

export const LeftBox = styled.div`
    margin-block-end: 45px;
    ${device.large} {
        margin-block-end: 0;
    }
`;

export const StyledHeading = styled.h3`
    font-weight: 600;
    position: relative;
    line-height: 1.4;
    padding-inline-start: 34px;
    padding-inline-end: 30px;
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

export const StyledDesc = styled.p`
    margin-block-start: 15px;
    font-size: 18px;
    margin-inline-start: 34px;
    color: ${themeGet("colors.text")};
`;
