import styled, { space, themeGet } from "@styled";

export const RatingsWrap = styled.div`
    color: ${themeGet("colors.yellow")};
    font-size: 24px;
    ${space};
    i {
        &:not(:first-child) {
            margin-inline-start: 11px;
        }
    }
`;
