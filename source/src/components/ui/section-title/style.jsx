import styled, {
    css,
    device, layout, space,
    themeGet, typography
} from "@styled";
import { allowedTags } from "@utils";

export const StyledSectionTitle = styled("div").withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        ![...allowedTags].includes(prop) && defaultValidatorFn(prop),
})`
    ${typography};
    ${space};
    ${layout}
`;

export const StyledTitle = styled.h2`
    ${({ $layout }) =>
        $layout === 2 &&
        css`
            margin-block-end: 10px;
            ${device.medium} {
                margin-block-end: 20px;
            }
        `}
    span {
        color: ${themeGet("colors.primary")};
    }
`;

export const StyledSubtitle = styled.h6`
    //color: ${themeGet("colors.silver")};
    color:#696969;
    font-weight: 400;
    ${({ $layout }) =>
        $layout === 1 &&
        css`
            margin-block-start: -5px;
            margin-block-end: 10px;
            // text-transform: uppercase;
            font-size: 20px;
            letter-spacing: 3px;
            line-height: 2.43;
            ${device.medium} {
                margin-block-end: 20px;
            }
        `}
    ${({ $layout }) =>
        $layout === 2 &&
        css`
            font-size: 18px;
        `}
`;

export const StyledDesc = styled.p`
    margin-block-start: 20px;
    ${device.medium} {
        margin-block-start: 30px;
    }
    ${space}
`;
