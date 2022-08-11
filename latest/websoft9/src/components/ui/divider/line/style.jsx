import styled, { border, space, themeGet } from "@styled";

export const LineWrap = styled.hr`
    border-color: ${themeGet("colors.border")};
    ${border};
    ${space};
`;
