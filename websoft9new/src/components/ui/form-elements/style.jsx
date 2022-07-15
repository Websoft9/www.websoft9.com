import { themeGet, css, space, border as borderStyles, device } from "@styled";

export const InputStyles = css`
    width: 100%;
    color: #000;
    background-color: ${themeGet("colors.gray.100")};
    font-size: 15px;
    font-weight: 400;
    outline: none;
    border: 1px solid ${themeGet("colors.gray.100")};
    border-radius: ${themeGet("radii.md")};
    padding: 3px 20px;
    height: 56px;

    ${({ $width }) =>
        !!$width &&
        css`
            ${!Array.isArray($width) &&
            css`
                width: ${$width};
            `}
            ${Array.isArray($width) &&
            css`
                width: ${$width[0]};
                ${device.small} {
                    width: ${$width[1]};
                }
                ${device.medium} {
                    width: ${$width[2]};
                }
                ${device.large} {
                    width: ${$width[3]};
                }
                ${device.xlarge} {
                    width: ${$width[4]};
                }
            `}
        `}
    ${({ $height }) =>
        !!$height &&
        css`
            ${!Array.isArray($height) &&
            css`
                height: ${$height};
            `}
            ${Array.isArray($height) &&
            css`
                height: ${$height[0]};
                ${device.small} {
                    height: ${$height[1]};
                }
                ${device.medium} {
                    height: ${$height[2]};
                }
                ${device.large} {
                    height: ${$height[3]};
                }
                ${device.xlarge} {
                    height: ${$height[4]};
                }
            `}
        `}
    &::placeholder {
        color: ${themeGet("colors.text")};
        font-size: ${themeGet("fontSize.body")};
        font-family: ${themeGet("fonts.body")};
    }
    &:-ms-input-placeholder {
        color: ${themeGet("colors.text")};
        font-size: ${themeGet("fontSize.body")};
        font-family: ${themeGet("fonts.body")};
    }
    &::-ms-input-placeholder {
        color: ${themeGet("colors.text")};
        font-size: ${themeGet("fontSize.body")};
        font-family: ${themeGet("fonts.body")};
    }
    &:disabled,
    &[readonly] {
        background-color: ${themeGet("colors.whiteSmoke")};
    }

    ${({ $hover }) =>
        !!$hover === false &&
        css`
            &:focus {
                outline: 0;
                box-shadow: none;
                color: ${themeGet("colors.text")};
                border-color: ${themeGet("colors.primary")};
            }
        `}

    ${({ $hover }) =>
        $hover === 1 &&
        css`
            &:focus {
                outline: 0;
                box-shadow: none;
                color: ${themeGet("colors.primary")};
                border-color: ${themeGet("colors.primary")};
            }
        `}

    ${({ $hover }) =>
        $hover === 2 &&
        css`
            &:focus {
                color: #222;
                border-color: transparent;
                background: #fff;
                box-shadow: ${themeGet("shadows.default")};
            }
        `}

    ${({ $customStyle }) =>
        $customStyle === "noborder" &&
        css`
            padding: 0;
            color: ${themeGet("colors.text")};
            border-width: 0;
            background-color: transparent;
            &:focus {
                box-shadow: none;
                color: ${themeGet("colors.text")};
            }
        `}
    ${({ $customStyle }) =>
        $customStyle === "nofocus" &&
        css`
            &:focus {
                box-shadow: none;
                border: none;
            }
        `}

        
    ${space};
    ${borderStyles};
`;

export const SuccessInputStyles = css`
    border-color: ${themeGet("colors.success")};
    &:focus {
        border-color: ${themeGet("colors.success")};
    }
`;

export const WarningInputStyles = css`
    border-color: ${themeGet("colors.warning")};
    &:focus {
        border-color: ${themeGet("colors.warning")};
    }
`;

export const ErrorInputStyles = css`
    border-color: ${themeGet("colors.danger")};
    &:focus {
        border-color: ${themeGet("colors.danger")};
    }
`;
