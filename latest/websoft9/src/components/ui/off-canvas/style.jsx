import styled, { css, device, themeGet } from "@styled";
import CloseIcon from "@assets/images/icons/light-close.png";

export const OffCanvaseWrap = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${themeGet("colors.heading")};
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    z-index: 9999;
    background: rgba(0, 0, 0, 0.7);
    cursor: url(${CloseIcon}) 16 16, pointer;
    overflow-y: hidden;
    visibility: hidden;
    opacity: 0;
    ${(props) =>
        props.isOpen &&
        css`
            visibility: visible;
            opacity: 1;
        `}
    ${(props) =>
        props.scrollable &&
        css`
            overflow: auto;
        `}
`;

export const OffCanvasInner = styled.div`
    transform: translateX(120%);
    width: 300px;
    height: 100%;
    margin-inline-start: auto;
    cursor: default;
    background: ${themeGet("colors.primary")};
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    overflow-y: hidden;
    ${device.small} {
        width: 400px;
    }
    ${(props) =>
        props.scrollable &&
        css`
            overflow-y: auto;
        `}
    ${(props) =>
        props.isOpen &&
        css`
            transform: translateX(0%);
        `}
`;
