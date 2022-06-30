import styled, { themeGet, space } from "@styled";

export const ProgressBarWrap = styled.div`
    &:not(:last-child) {
        ${space};
    }
    .heading {
        color: ${themeGet("colors.kimberly")};
        margin-block-end: 12px;
        font-weight: 400;
    }
    .progress {
        height: 4px;
        overflow: visible;
        font-size: 14px;
        background-color: ${themeGet("colors.whiteSmoke")};
        border-radius: 0;
        &-bar {
            position: relative;
            background: ${themeGet("colors.primary")};
            color: ${themeGet("colors.primary")};
        }
    }
`;
