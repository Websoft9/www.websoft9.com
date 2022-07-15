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
        height: 16px;
        overflow: visible;
        font-size: 14px;
        border-radius: 0;
        height: 32px;
        padding: 6px;
        border-radius: 30px;
        -webkit-box-shadow: none;
        box-shadow: none;
        background-color: #f2f2f2;
        &-bar {
            background: ${themeGet("colors.primary")};
            position: relative;
            top: auto;
            bottom: auto;
            left: auto;
            right: auto;
            border-radius: inherit;
        }
        .percent-label {
            top: 50%;
            transform: translateY(-50%);
            right: 15px;
            display: block;
            font-size: 12px;
            font-weight: 500;
            color: #fff;
            position: absolute;
        }
    }
`;
