import styled, { css, device, themeGet } from "@styled";

export const SocialShareWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row-reverse;
    ${device.small} {
        flex-direction: row;
    }
    ${({ $layout }) =>
        $layout === 2 &&
        css`
            .social-btn {
                margin-inline-start: 0;
            }
        `}
`;

export const SocialMediaWrap = styled.div`
    position: relative;
    margin-inline-end: 10px;
    ${device.small} {
        margin-inline-start: 10px;
        margin-inline-end: 0;
    }
`;

export const FloatingSocialBox = styled.div`
    position: absolute;
    bottom: 100%;
    right: 0%;
    transform: translate(0%, -1px);
    width: auto;
    white-space: nowrap;
    padding-inline: 4px;
    text-align: center;
    background: #fff;
    border-radius: ${themeGet("radii.md")};
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
    user-select: none;
    filter: drop-shadow(0 2px 20px rgba(0, 0, 0, 0.06));
    z-index: 999;
    padding-block: 10px;
    padding-inline: 15px;
    visibility: hidden;
    opacity: 0;
    transition: ${themeGet("transition")};
    ${(props) =>
        props.isOpen &&
        css`
            transform: translate(0%, -12px);
            visibility: visible;
            opacity: 1;
        `}
    @media ${device.small} {
        right: 10%;
    }
    &:before {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(100%);
        content: "";
        border-block-start: 8px solid #fff;
        border-inline-start: 9px solid transparent;
        border-inline-end: 9px solid transparent;
    }
`;
