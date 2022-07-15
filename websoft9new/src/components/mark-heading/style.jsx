import styled, { themeGet, space, layout, flexbox } from "@styled";

export const StyledHeading = styled.h2`
    position: relative;
    font-size: 12px;
    line-height: 2em;
    letter-spacing: 2px;
    color: ${themeGet("colors.silver")};
    text-transform: uppercase;
    display: flex;
    align-items: flex-end;
    span,
    mark {
        font-size: clamp(140px, 10vw, 180px);
        line-height: 0.8;
        font-weight: 900;
        margin-block-end: -5px;
        margin-inline-start: -5px;
        margin-inline-end: 5px;
        color: ${themeGet("colors.secondary")};
    }
    ${space};
    ${layout};
    ${flexbox};
`;
