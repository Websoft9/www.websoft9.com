import styled, { themeGet, device } from "@styled";

export const BlogMedia = styled.div`
    margin-block-end: 22px;
`;

export const BlogThumb = styled.figure`
    margin: 0;
    .gatsby-image-wrapper {
        border-radius: ${themeGet("radii.md")};
    }
    a {
        display: block;
    }
`;

export const BlogTitle = styled.h3`
    font-size: 25px;
    margin-block-end: 10px;
    ${device.small} {
        font-size: 30px;
    }
    ${device.large} {
        font-size: 35px;
    }
    ${device.xlarge} {
        font-size: 40px;
    }
    a {
        color: ${themeGet("colors.heading")};
    }
`;

export const BlogHeaderMeta = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-block-end: 25px;
`;

export const BlogExcerpt = styled.div`
    margin-block-end: 35px;
`;

export const BlogFooter = styled.footer`
    display: flex;
    flex-wrap: wrap;
`;

export const BlogFooterLeft = styled.div`
    flex-basis: 100%;
    max-width: 100%;
    ${device.small} {
        flex-basis: 50%;
        max-width: 50%;
    }
`;

export const BlogFooterRight = styled.div`
    flex-basis: 100%;
    max-width: 100%;
    margin-top: 10px;
    ${device.small} {
        flex-basis: 49%;
        max-width: 49%;
        margin-top: 0;
    }

    .share-label {
        font-weight: 500;
    }
`;
