import styled, { themeGet } from "@styled";

export const PopupVideoWrap = styled.div`
    position: relative;
    .gatsby-image-wrapper {
        width: 100% !important;
    }
    img {
        border-radius: ${themeGet("radii.md")};
        width: 100% !important;
    }
`;

export const VideoBtnWrap = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
`;
