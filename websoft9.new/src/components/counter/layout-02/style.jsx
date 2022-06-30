import styled, { themeGet, space, device } from "@styled";

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
    font-size: 56px;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    margin-block-end: 20px;
    @media ${device.large} {
        font-size: 50px;
    }
    @media ${device.medium} {
        font-size: 40px;
    }
    @media ${device.small} {
        font-size: 34px;
    }
`;

export const FunFactText = styled.h6`
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.7);
`;
