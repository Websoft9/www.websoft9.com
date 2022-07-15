import { graphql } from "gatsby";

export const query = graphql`
    fragment SolutionContent on ItSolutionContent {
        section
        headings {
            level
            content
        }
        texts {
            content
        }
        video_button {
            link
        }
        section_title {
            title
        }
        images {
            alt
            src {
                name
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
        buttons {
            id
            path
            content
            variant
            color
            shape
            size
            hoverStyle
            disableHover
            icon
            icondistance
            iconposition
        }
        items {
            id
            title
            description
            images {
                alt
                src {
                    name
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
