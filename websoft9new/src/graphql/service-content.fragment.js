import { graphql } from "gatsby";

export const query = graphql`
    fragment ServiceContent on ItServiceContent {
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
        section_title {
            title
            subtitle
            description
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
            fontWeight
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
