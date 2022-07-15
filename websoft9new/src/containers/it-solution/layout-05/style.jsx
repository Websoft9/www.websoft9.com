import styled, { device, themeGet } from "@styled";

export const SectionWrap = styled.section`
    background: ${themeGet("colors.gray.100")};
    padding-block-start: 30px;
    ${device.large} {
        margin-block-start: -110px;
    }
`;
