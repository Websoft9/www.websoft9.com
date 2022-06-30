import styled, { css, themeGet } from "@styled";

export const StyledBurgerButton = styled.button`
    width: 24px;
    height: 25px;
    position: relative;
    background: transparent;
    border: none;
    padding: 0;
    span {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 100%;
        height: 2px;
        background-color: ${themeGet("colors.heading")};
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        &:after,
        &:before {
            position: absolute;
            background-color: ${themeGet("colors.heading")};
            content: "";
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            left: 0;
            width: 100%;
            height: 2px;
        }
        &:before {
            bottom: 8px;
        }
        &:after {
            bottom: -8px;
        }
        ${(props) =>
            props.whiteColor &&
            css`
                background-color: #fff;
                &:after,
                &:before {
                    background-color: #fff;
                }
            `}
    }
    &:hover {
        span {
            background-color: ${themeGet("colors.primary")};
            &:before {
                width: 80%;
                background-color: ${themeGet("colors.primary")};
            }
            &:after {
                width: 60%;
                background-color: ${themeGet("colors.primary")};
            }
        }
    }
`;
