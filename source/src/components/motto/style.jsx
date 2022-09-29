import styled, { space, themeGet, device } from "@styled";

export const StyledMotto = styled.h3`
    font-size: 16px;
    line-height: 1.4;
    text-align: center;
    font-weight: 500;
    ${device.medium} {
        font-size: 18px;
    }
    a {
        color: ${themeGet("colors.primary")};
    }
    ${space}
`;
