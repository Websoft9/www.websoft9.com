import styled, { css, themeGet } from "@styled";

export const FlyoutWrap = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${themeGet("colors.heading")};
    z-index: 9999;
    visibility: hidden;
    opacity: 0;
    overflow: hidden;
    transform: translateY(100%);
    transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
    ${(props) =>
        props.isOpen &&
        css`
            visibility: visible;
            opacity: 1;
            transform: translateY(0);
        `}
`;
