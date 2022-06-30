import { graphql } from "gatsby";

export const query = graphql`
    fragment CaseStudyTwo on CaseStudy {
        id
        title
        slug
        category
        excerpt
        slide_image {
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
