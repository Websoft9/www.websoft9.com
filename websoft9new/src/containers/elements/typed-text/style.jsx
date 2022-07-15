import styled, { device, themeGet } from "@styled";

export const SectionWrap = styled.div`
    padding-block: 80px;
    ${device.large} {
        padding-block: 100px;
    }
`;

export const TypedTextWrap = styled.h4`
    max-width: 700px;
    line-height: 1.34;
    word-wrap: break-word;
    font-weight: 700;
    margin-block-start: -20px;
    margin-block-end: 0;
    text-align: center;
    margin-inline: auto;
    font-size: 35px;

    ${device.medium} {
        font-size: 40px;
    }
    ${device.large} {
        font-size: 48px;
    }
    span {
        &:not(.not-typical) {
            color: ${themeGet("colors.primary")};
            font-style: italic;
        }
    }
`;
