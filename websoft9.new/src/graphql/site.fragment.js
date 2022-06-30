import { graphql } from "gatsby";

export const query = graphql`
    fragment Site on Site {
        siteMetadata {
            copyright
            socials {
                ...Social
            }
            contact {
                phone
                email
                address
                website
            }
            siteUrl
        }
    }
`;
