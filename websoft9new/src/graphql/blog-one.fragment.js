import { graphql } from "gatsby";

export const query = graphql`
    fragment BlogOne on Article {
        title
        slug
        postedAt {
            date(formatString: "LL")
            slug
        }
        format
        excerpt
        image {
            src {
                childImageSharp {
                    gatsbyImageData(
                        layout: CONSTRAINED
                        width: 550
                        height: 340
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
