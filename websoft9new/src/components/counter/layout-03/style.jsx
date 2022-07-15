import styled, { themeGet, space } from "@styled";

export const FunFactWrap = styled.div`
    text-align: center;
    ${space};
`;

export const FunFactTitle = styled.h5`
    color: ${themeGet("colors.heading")};
    font-weight: 500;
    margin-block-end: 10px;
`;

export const FunFactCount = styled.div`
    font-size: clamp(34px, 5vw, 56px);
    font-weight: 400;
    line-height: 1;
    color: ${themeGet("colors.primary")};
    margin-block-end: 19px;
`;

export const FunFactText = styled.h6`
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${themeGet("colors.gray.700")};
`;
