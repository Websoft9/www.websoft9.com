import styled, { css, themeGet, device } from "@styled";

export const DropmenuItemInner = styled.div`
    font-weight: 500;
    text-transform: uppercase;
    border: 0;
    background: ${themeGet("colors.white")};
    color: #222;
    line-height: 1;
    &:hover {
        background: ${themeGet("colors.gray.400")};
    }
    & > span:not(:first-child) {
        margin-inline-start: 10px;
    }
    ${(props) =>
        !props.active &&
        css`
            padding: 10px;
        `}
    ${(props) =>
        props.active &&
        css`
            color: ${themeGet("colors.heading")};
            padding: 0 10px;
            ${device.xxlarge} {
                padding: 0 5px;
            }
            &:hover {
                background: ${themeGet("colors.white")};
            }
        `}
    i {
        font-size: 12px;
        margin-inline-start: 6px;
    }
`;
