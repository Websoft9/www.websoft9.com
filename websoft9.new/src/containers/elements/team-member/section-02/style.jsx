import styled, { themeGet, device } from "@styled";

export const TeamWrapper = styled.section`
    padding-block-start: 52px;
    padding-block-end: 20px;
    background: #f8f8f8;
    ${device.medium} {
        padding-block-start: 72px;
        padding-block-end: 41px;
    }
    ${device.large} {
        padding-block-start: 90px;
        padding-block-end: 65px;
    }
`;

export const StyledHeading = styled.h3`
    line-height: 1.4;
    font-size: 28px;
    margin-block-end: 50px;
    text-align: center;
    span {
        color: ${themeGet("colors.primary")};
    }
    ${device.large} {
        font-size: 34px;
        margin-block-end: 70px;
    }
    ${device.xlarge} {
        font-size: 40px;
        margin-block-end: 85px;
    }
`;
