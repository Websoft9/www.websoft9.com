import { graphql } from "gatsby";

export const query = graphql`
    fragment BlogFour on Article {
        title
        slug
        postedAt {
            date(formatString: "LL")
            slug
        }
        format
        author {
            ...Author
        }
        image {
            src {
                childImageSharp {
                    gatsbyImageData(
                        layout: CONSTRAINED
                        width: 528
                        height: 343
                        formats: WEBP
                        quality: 100
                        placeholder: DOMINANT_COLOR
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
