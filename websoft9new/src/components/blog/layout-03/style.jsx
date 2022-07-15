import styled, { themeGet } from "@styled";

export const BlogMedia = styled.div`
    position: relative;
    transition: ${themeGet("transition")};
`;

export const BlogThumb = styled.figure`
    img {
        width: 100%;
        border-radius: ${themeGet("radii.md")};
        transition: all 0.3s;
    }
    a {
        z-index: 2;
        position: relative;
        display: block;
        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0.5;
            z-index: 1;
            background-image: -webkit-gradient(
                linear,
                left top,
                left bottom,
                color-stop(11%, rgba(51, 51, 51, 0)),
                color-stop(80%, #000)
            );
            background-image: linear-gradient(
                -180deg,
                rgba(51, 51, 51, 0) 11%,
                #000 80%
            );
            border-radius: ${themeGet("radii.md")};
        }
    }
`;

export const BlogHeaderMeta = styled.div`
    position: absolute;
    bottom: 18px;
    left: 30px;
    right: 30px;
    color: #fff;
    font-size: 14px;
    margin-inline: -8px;
    z-index: 2;
    display: flex;
    align-items: center;
`;

export const BlogQuoteMeta = styled.div`
    color: ${themeGet("colors.text")};
    font-size: 14px;
    margin-inline: -8px;
    z-index: 2;
    display: flex;
    align-items: center;
`;

export const BlogInfo = styled.div`
    margin-block-start: 20px;
`;

export const BlogTitle = styled.h4`
    a {
        color: inherit;
        font-size: inherit;
    }
`;

export const BlogExcerpt = styled.div`
    margin-block-start: 15px;
`;

export const ReadMoreBtn = styled.div`
    margin-block-start: 15px;
    .mt-btn {
        border-bottom: 1px solid ${themeGet("colors.borderDash")};
    }
`;

export const BlogWrapper = styled.div``;
