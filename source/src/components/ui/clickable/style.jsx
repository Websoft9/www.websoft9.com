import styled, { typography, color, themeGet } from "@styled";

export const ClickableWrap = styled.button`
    background: transparent;
    padding: 0;
    border: none;
    svg,
    i {
        ${typography};
        ${color};
        &:hover {
            color: ${themeGet("colors.primary")};
        }
    }
`;
