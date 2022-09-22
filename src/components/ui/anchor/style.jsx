import styled, {
    css,
    typography,
    space,
    color,
    layout,
    border,
    themeGet,
} from "@styled";
import { Link } from "gatsby";
import { allowedTags } from "@utils";

export const LinkStyled = css`
    ${typography};
    ${space};
    ${color};
    ${layout};
    ${border};
    ${(props) =>
        props.$layout === "underline" &&
        css`
            border-bottom: 1px solid #ccc;
        `}

    .icon {
        font-size: 26px;
    }
    ${(props) =>
        props.$hover &&
        css`
            &:hover {
                ${(props) =>
                    props.$hover.color === "primary" &&
                    css`
                        color: ${themeGet("colors.primary")};
                    `}
                ${(props) =>
                    props.$hover.color === "secondary" &&
                    css`
                        color: ${themeGet("colors.secondary")};
                    `}
                ${(props) =>
                    props.$hover.color === "text" &&
                    css`
                        color: ${themeGet("colors.text")};
                    `}
                ${(props) =>
                    props.$hover.color === "heading" &&
                    css`
                        color: ${themeGet("colors.heading")};
                    `}
                ${(props) =>
                    props.color !== "primary" &&
                    props.color !== "secondary" &&
                    props.color !== "text" &&
                    props.color !== "heading" &&
                    css`
                        color: ${(props) =>
                            props.color || themeGet("colors.primary")};
                    `}
            }

            ${(props) =>
                props.$hover.layout === 2 &&
                css`
                    position: relative;
                    &:before {
                        transition: ${themeGet("transition")};
                        content: "";
                        position: absolute;
                        bottom: -1px;
                        right: 0;
                        width: 0;
                        height: 1px;
                        ${(props) =>
                            props.color === "primary" &&
                            css`
                                background-color: ${themeGet("colors.primary")};
                            `}
                        ${(props) =>
                            props.color === "secondary" &&
                            css`
                                background-color: ${themeGet(
                                    "colors.secondary"
                                )};
                            `}
                ${(props) =>
                            props.color === "text" &&
                            css`
                                background-color: ${themeGet("colors.text")};
                            `}
                ${(props) =>
                            props.color === "heading" &&
                            css`
                                background-color: ${themeGet("colors.heading")};
                            `}
                ${(props) =>
                            props.color !== "primary" &&
                            props.color !== "secondary" &&
                            props.color !== "text" &&
                            props.color !== "heading" &&
                            css`
                                background-color: ${(props) =>
                                    props.color || themeGet("colors.primary")};
                            `}
                ${(props) =>
                            !props.color &&
                            css`
                                background-color: ${themeGet("colors.primary")};
                            `}
                    }
                    &:hover:before {
                        left: 0;
                        width: 100%;
                        right: auto;
                    }
                `}
        `}

    &.image-btn {
        border-radius: ${themeGet("radii.md")};
        box-shadow: ${themeGet("shadows.sm")};
        overflow: hidden;
    }
`;

export const StyledLink = styled(Link).withConfig({
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
    
    ${LinkStyled}
`;

export const StyledAnchor = styled("a").withConfig({
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
    
    ${LinkStyled}
`;
