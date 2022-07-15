import { graphql } from "gatsby";

export const query = graphql`
    fragment ItSolutionTwo on ItSolution {
        id
        title
        slug
        excerpt
        icon {
            images {
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
    }
`;
