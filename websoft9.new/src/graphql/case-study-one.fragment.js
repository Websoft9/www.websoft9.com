import { graphql } from "gatsby";

export const query = graphql`
    fragment CaseStudyOne on CaseStudy {
        id
        title
        slug
        category
        excerpt
        featured_image {
            src {
                childImageSharp {
                    gatsbyImageData(
                        formats: WEBP
                        quality: 100
                        breakpoints: 5
                        placeholder: DOMINANT_COLOR
                    )
                }
            }
        }
    }
`;
