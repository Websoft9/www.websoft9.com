import styled, {
    css,
    typography,
    space,
    color,
    layout,
    flexbox,
    position,
    themeGet,
} from "@styled";
import { allowedTags } from "@utils";

export const StyledHeading = styled("h2").withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        ![...allowedTags].includes(prop) && defaultValidatorFn(prop),
})`
    ${({ $tt }) =>
        $tt &&
        css`
            text-transform: ${$tt};
        `}
    ${({ $ww }) =>
        $ww &&
        css`
            word-wrap: ${$ww};
        `}
    
    ${typography};
    ${space};
    ${color};
    ${layout};
    ${flexbox};
    ${position};

    ${(props) =>
        props.$child &&
        css`
            & > * {
                ${(props) =>
                    props.$child.color === "primary" &&
                    css`
                        color: ${themeGet("colors.primary")};
                    `}
                ${(props) =>
                    props.$child.color === "secondary" &&
                    css`
                        color: ${themeGet("colors.secondary")};
                    `}
            ${(props) =>
                    (props.$child.color !== "primary") &
                        (props.$child.color !== "secondary") &&
                    css`
                        color: ${(props) =>
                            props.$child.color || themeGet("colors.secondary")};
                    `}
            }
        `}
`;
