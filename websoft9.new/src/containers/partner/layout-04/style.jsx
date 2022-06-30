import styled, { themeGet, device } from "@styled";

export const SectionWrap = styled.div`
    padding-block: 40px;
    ${device.medium} {
        padding-block: 60px;
    }
    ${device.large} {
        padding-block: 80px;
    }
`;

export const StyledHeading = styled.h5`
    max-width: 700px;
    width: 100%;
    font-weight: 500;
    margin: auto;
    text-align: center;
    margin-block-end: 30px;
    font-size: 20px;
    span {
        color: ${themeGet("colors.primary")};
    }
    ${device.medium} {
        margin-block-end: 50px;
        font-size: 24px;
    }
    ${device.large} {
        margin-block-end: 60px;
    }
`;
