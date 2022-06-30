import { graphql } from "gatsby";

export const query = graphql`
    fragment ItServiceThree on ItService {
        id
        title
        slug
        excerpt
        featured_image {
            src {
                childImageSharp {
                    gatsbyImageData(
                        layout: CONSTRAINED
                        width: 370
                        height: 370
                        formats: WEBP
                        quality: 100
                        placeholder: DOMINANT_COLOR
                    )
                }
            }
            alt
        }
    }
`;
