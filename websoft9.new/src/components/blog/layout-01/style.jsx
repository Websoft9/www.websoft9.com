import styled, { themeGet, space } from "@styled";
import Heading from "@ui/heading";

export const BlogMedia = styled.div`
    a {
        display: block;
    }
    margin-block-end: 20px;
    transition: ${themeGet("transition")};
`;

export const BlogThumb = styled.figure`
    img {
        width: 100%;
        border-radius: ${themeGet("radii.md")};
        transition: all 0.3s;
    }
`;

export const BlogInfo = styled.div``;

export const BlogHeader = styled.header``;

export const BlogTitle = styled(Heading)`
    font-size: 24px;
    line-height: 1.5;
    margin-block-end: 0;
    a {
        color: inherit;
        font-size: inherit;
    }
`;

export const BlogExcerpt = styled.div`
    margin-block-start: 10px;
`;

export const ReadMoreBtn = styled.div`
    margin-block-start: 13px;
    .mt-btn {
        border-bottom: 1px solid ${themeGet("colors.border")};
    }
`;

export const BlogWrapper = styled.div`
    ${space};
    &:hover {
        ${BlogMedia} {
            transform: translateY(-5px);
        }
    }
`;
