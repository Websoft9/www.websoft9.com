import styled, { themeGet, space } from "@styled";

export const FunFactWrap = styled.div`
    display: flex;
    align-items: center;
    ${space};
`;

export const StyledIcon = styled.div`
    border-radius: 10px;
    height: 80px;
    width: 80px;
    line-height: 80px;
    background: #fff;
    font-size: 30px;
    text-align: center;
    margin-right: 20px;
    box-shadow: 0 0 15px rgb(51 51 51 / 5%);
    color: ${themeGet("colors.klein")};
`;

export const FunFactTitle = styled.h6`
    color: ${themeGet("colors.heading")};
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 0;
`;

export const FunFactCount = styled.div`
    font-size: clamp(26px, 3vw, 34px);
    color: #000000;
    margin-bottom: 10px;
    font-weight: 600;
    line-height: 1;
`;
