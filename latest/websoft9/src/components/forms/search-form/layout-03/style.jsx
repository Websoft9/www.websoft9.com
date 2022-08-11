import styled, { themeGet, device } from "@styled";

export const SearchFromWrap = styled.div`
    position: relative;
    max-width: 1200px;
    padding-inline: 15px;
    width: 100%;
    margin: auto;
    input {
        background-color: transparent;
        border: 0;
        border-block-end: 2px solid ${themeGet("colors.primary")};
        border-radius: 0;
        padding-block: 15px;
        padding-inline-start: 0;
        padding-inline-end: 50px;
        width: 100%;
        color: ${themeGet("colors.text")};
        font-size: 72px;
        height: 100px;
        @media ${device.small} {
            font-size: 24px;
            height: 60px;
        }
        &:hover,
        &:focus {
            color: ${themeGet("colors.text")};
        }
        &::placeholder,
        &::-webkit-input-placeholder {
            color: ${themeGet("colors.primary")} !important;
        }
        &:-ms-input-placeholder {
            color: ${themeGet("colors.primary")} !important;
        }
    }
`;
