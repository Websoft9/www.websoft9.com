import styled, { css, themeGet } from "@styled";
import QuoteImg from "@assets/images/icons/quote.png";

export const StyledQuoute = styled.blockquote`
    position: relative;
    text-align: center;
    margin: 0;
    &:before {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background: url(${QuoteImg}) no-repeat;
        background-size: cover;
    }

    ${({ $shape }) =>
        $shape === "rounded" &&
        css`
            border-radius: ${themeGet("radii.md")};
        `}

    ${({ $color }) =>
        $color === "light" &&
        css`
            background: ${themeGet("colors.gray.600")};
        `}

    ${({ $color }) =>
        $color === "dark" &&
        css`
            background: rgba(0, 0, 0, 0.5);
        `}

    ${({ $size }) =>
        $size === "xlarge" &&
        css`
            padding-block-start: 78px;
            padding-block-end: 53px;
            padding-inline: 40px;
            &:before {
                top: 54px;
                height: 132px;
                width: 150px;
            }
        `}
        
    ${({ $size }) =>
        $size === "large" &&
        css`
            padding-block-start: 45px;
            padding-block-end: 40px;
            padding-inline: 30px;
            &:before {
                top: 30px;
                height: 90px;
                width: 120px;
            }
        `}
    ${({ $size }) =>
        $size === "small" &&
        css`
            padding-block-start: 50px;
            padding-block-end: 65px;
            padding-inline: 30px;
            &:before {
                top: 10px;
                height: 80px;
                width: 95px;
            }
        `}
    
    ${({ $size }) =>
        $size === "xlarge" &&
        css`
            h3 {
                font-size: 24px;
                line-height: 1.5;
                margin-bottom: 39px;
            }
            footer {
                font-size: 18px;
                color: ${themeGet("colors.heading")};
                margin-block-end: 0;
            }
        `}
    ${({ $size }) =>
        $size !== "xlarge" &&
        css`
            h3 {
                font-size: 20px;
                line-height: 1.5;
                margin-block-end: 30px;
            }
            footer {
                font-size: 16px;
                color: ${themeGet("colors.heading")};
                margin-block-end: 0;
            }
        `}
`;
