import styled, { themeGet, device } from "@styled";

export const SectionWrap = styled.section`
    padding-block-end: 60px;
    ${device.medium} {
        padding-block-end: 80px;
    }
    ${device.large} {
        padding-block-end: 100px;
    }
`;

export const StyledTitleWrap = styled.div`
    text-align: center;
    margin-block-end: 50px;
    .mt-btn {
        font-size: 18px;
        font-weight: 500;
        border-bottom: 1px solid currentColor;
    }
`;

export const GalleryWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    &:nth-child(4n + 1) {
        grid-column: span 8;
    }
`;

export const GalleryGrid = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    &:nth-child(4n + 1) {
        grid-column: span 12;
        ${device.small} {
            grid-column: span 6;
        }
        ${device.large} {
            grid-column: span 8;
        }
    }
    &:nth-child(4n + 2) {
        grid-column: span 12;
        ${device.small} {
            grid-column: span 6;
        }
        ${device.large} {
            grid-column: span 4;
        }
    }
    &:nth-child(4n + 3) {
        grid-column: span 12;
        ${device.small} {
            grid-column: span 6;
        }
    }
    &:nth-child(4n + 4) {
        grid-column: span 12;
        ${device.small} {
            grid-column: span 6;
        }
    }
`;

export const GalleryOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    background-color: ${themeGet("colors.primary")};
    border-radius: ${themeGet("radii.md")};
    transition: ${themeGet("transition")};
`;

export const GalleryOverlayIcon = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    width: 24px;
    height: 24px;
    opacity: 0;
    visibility: hidden;
    transition: ${(props) => props.transition};
    cursor: pointer;
    .icon {
        color: #fff;
        width: 100%;
        height: 100%;
    }
`;

export const GalleryItem = styled.div`
    position: relative;
    display: flex;
    align-items: stretch;
    background-position: center;
    background-size: cover;
    height: 100%;
    width: 100%;
    max-height: 420px;
    .gatsby-image-wrapper {
        width: 100%;
    }
    img {
        border-radius: ${themeGet("radii.md")};
    }
    &:hover {
        ${GalleryOverlay},
        ${GalleryOverlayIcon} {
            opacity: 0.9;
            visibility: visible;
        }
    }
`;
