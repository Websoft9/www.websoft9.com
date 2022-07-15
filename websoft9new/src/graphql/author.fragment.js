import { graphql } from "gatsby";

export const query = graphql`
    fragment Author on Author {
        name
        slug
        image {
            src {
                childImageSharp {
                    gatsbyImageData(
                        layout: FIXED
                        width: 32
                        height: 32
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
