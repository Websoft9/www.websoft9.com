import styled, { css, themeGet, space, device } from "@styled";

export const FunFactTitle = styled.h5`
    color: ${themeGet("colors.heading")};
    font-weight: 500;
    margin-block-end: 10px;
`;

export const FunFactMiddle = styled.h2`
    color: #2977C9;
    font-size: 64px;
    line-height: 1.2;
    //margin-block-end: 10px;
`;

export const FunFactCount = styled.div`
    ${(props) =>
        props.$layout !== 2 &&
        css`
            font-size: 34px;
            font-weight: 600;
            line-height: 1.41;
            color: ${themeGet("colors.primary")};
            ${device.medium} {
                font-size: 40px;
            }
            ${device.large} {
                font-size: 50px;
            }
            ${device.large} {
                font-size: 64px;
            }
        `}

    ${(props) =>
        props.$layout === 2 &&
        css`
            font-size: 34px;
            font-weight: 700;
            color: #fff;
            line-height: 1;
            margin-block-end: 10px;
            ${device.medium} {
                margin-block-end: 20px;
                font-size: 40px;
            }
            ${device.large} {
                font-size: 50px;
            }
            ${device.xlarge} {
                font-size: 56px;
            }
        `}
`;

export const FunFactText = styled.h6`
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    ${(props) =>
        props.$layout !== 2 &&
        css`
            // color: ${themeGet("colors.secondary")};
            color: #ababab;
        `}
    ${(props) =>
        props.$layout === 2 &&
        css`
            color: #ababab;
        `}
`;

export const FunFactWrap = styled.div`
    text-align: center;
    ${space};
`;

export const StyledMarkHeading = styled.h2`
    text-align: center;
    position: relative;
    font-size: 12px;
    line-height: 4em;
    letter-spacing: 2px;
    color: #ababab;
    text-transform: uppercase;
    display: flex;
    align-items: flex-end;
    span,
    mark {
        width:100%
        text-align: center;
        font-size: 64px;
        line-height: 1.2;
        // margin-block-end: -5px;
        // margin-inline-start: -5px;
        // margin-inline-end: 5px;
        color: #2977C9;
    }
`;