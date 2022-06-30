import styled, { themeGet, device } from "@styled";

export const SectionWrap = styled.section`
    padding-block: 60px;
    background: ${themeGet("colors.gray.100")};
    ${device.medium} {
        padding-block: 80px;
    }
    ${device.large} {
        padding-block: 100px;
    }
`;
