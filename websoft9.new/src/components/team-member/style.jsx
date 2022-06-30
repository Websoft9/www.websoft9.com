import styled, { css, themeGet, device } from "@styled";

export const TeamMemberInner = styled.div`
    margin-inline: auto;
    /* ${device.small} {
        .gatsby-image-wrapper {
            max-width: 100% !important;
        }
    } */
`;

export const TeamMemberImage = styled.div`
    position: relative;
`;

export const TeamMemberSocialWrap = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    padding-block: 11px;
    opacity: 0;
    visibility: hidden;
    text-align: center;
    background-color: rgb(0, 47, 166);
    transition: ${themeGet("transition")};
`;

export const TeamMemberInfo = styled.div`
    margin-block-start: 20px;
    ${({ $layout }) =>
        ($layout === 2 || $layout === 3) &&
        css`
            text-align: center;
        `}
`;

export const TeamMemberName = styled.h5`
    ${device.medium} {
        font-size: 20px;
    }
    ${({ $layout }) =>
        $layout === 3 &&
        css`
            font-size: 18px;
            line-height: 1.78;
        `}
`;

export const TeamMemberDesignation = styled.p``;

export const TeamMemberWrap = styled.div`
    ${({ $layout }) =>
        $layout === 1 &&
        css`
            ${TeamMemberInner} {
                max-width: 310px;
            }
        `}
    ${({ $layout }) =>
        $layout === 2 &&
        css`
            ${TeamMemberInner} {
                max-width: 350px;
            }
        `}
    &:hover {
        ${TeamMemberSocialWrap} {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
    }
`;
