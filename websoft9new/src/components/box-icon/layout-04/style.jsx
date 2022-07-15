import styled, {
    css,
    themeGet,
    space,
    flexbox,
    device,
    typography,
} from "@styled";
import { allowedTags } from "@utils";

export const BoxIconWrap = styled("div").withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        ![...allowedTags].includes(prop) && defaultValidatorFn(prop),
})`
    display: flex;
    ${space};
    ${flexbox};
    ${typography};
`;

export const BoxIconMarker = styled.div`
    margin-inline-end: 18px;
    svg,
    i {
        font-weight: 400;
        color: ${themeGet("colors.secondary")};
        font-size: 24px;
        line-height: 1;
    }
    ${({ $layout }) =>
        ($layout === 2 || $layout === 3) &&
        css`
            margin-inline-end: 25px;
            i,
            svg {
                font-size: 40px;
                font-weight: 300;
            }
        `}
    ${({ $layout }) =>
        $layout === 2 &&
        css`
            i,
            svg {
                color: #fff;
            }
        `}
`;

export const BoxIconInfo = styled.div``;

export const BoxIconTitle = styled.h5`
    color: ${themeGet("colors.secondary")};
    word-break: break-word;
    ${({ $layout }) =>
        ($layout === 2 || $layout === 3) &&
        css`
            font-size: 24px;
            margin-block-end: 0;
            font-weight: 700;
            line-height: 1.17;
            ${device.large} {
                font-size: 32px;
            }
        `}
    ${({ $layout }) =>
        ($layout === 3 || $layout === 4) &&
        css`
            color: ${themeGet("colors.primary")};
        `}
`;

export const BoxIconHeading = styled.h6`
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1.78;
    margin-block-end: 13px;
    ${({ $layout }) =>
        $layout === 2 &&
        css`
            color: #fff;
        `}
    ${({ $layout }) =>
        $layout === 3 &&
        css`
            color: ${themeGet("colors.heading")};
        `}
`;

export const BoxIconDesc = styled.p``;
