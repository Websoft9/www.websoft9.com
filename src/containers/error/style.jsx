import styled, { device, themeGet } from "@styled";

export const ErrorWrap = styled.div`
    padding-block-end: 80px;
    padding-block-start: 80px;
    height: 100vh;
    text-align: center;
    ${device.medium} {
        padding-block-end: 100px;
        padding-block-start: 100px;
    }
    ${device.large} {
        padding-block-end: 120px;
        padding-block-start: 120px;
    }
    h1 {
        font-size: clamp(100px, 19vw, 250px);
        font-weight: 900;
        letter-spacing: 5px;
        line-height: 1.1;
        margin-block-end: 30px;
        padding: 0;
        color: ${themeGet("colors.primary")};
        ${device.medium} {
            letter-spacing: 8px;
        }
        ${device.large} {
            letter-spacing: 10px;
        }
    }
    h2 {
        font-size: 25px;
        margin-block-end: 31px;
    }
    p {
        margin-block-end: 36px;
    }
`;
