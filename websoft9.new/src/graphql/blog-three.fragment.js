import { graphql } from "gatsby";

export const query = graphql`
    fragment BlogThree on Article {
        title
        slug
        postedAt {
            date(formatString: "LL")
            slug
        }
        author {
            ...Author
        }
        format
        excerpt
        image {
            src {
                childImageSharp {
                    gatsbyImageData(
                        layout: CONSTRAINED
                        width: 690
                        height: 422
                        formats: WEBP
                        quality: 100
                        placeholder: BLURRED
                    )
                }
            }
            alt
        }
        quote_text
        quote_author
        video_link
    }
`;
