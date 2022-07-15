import styled, { themeGet, space } from "@styled";

export const LocationBtnWrap = styled.div`
    ${space};
`;

export const LocationBtnText = styled.button`
    background: transparent;
    border: none;
    padding: 0;
    .button-icon {
        height: 56px;
        width: 56px;
        line-height: 56px;
        border-radius: ${themeGet("radii.round")};
        text-align: center;
        background: ${themeGet("colors.spring")};
        margin-inline-end: 14px;
        display: inline-block;
        .icon {
            color: ${themeGet("colors.primary")};
            font-size: 18px;
        }
    }
    .button-text {
        font-weight: 500;
        color: ${themeGet("colors.primary")};
        position: relative;
        &:after {
            content: "";
            width: 0;
            height: 1px;
            bottom: 0;
            position: absolute;
            left: auto;
            right: 0;
            transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
            background: currentColor;
        }
    }
    &:hover {
        .button-text {
            &:after {
                width: 100%;
                left: 0;
                right: auto;
            }
        }
    }
`;
