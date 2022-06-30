import { graphql } from "gatsby";

export const query = graphql`
    fragment ItServiceOne on ItService {
        id
        title
        slug
        excerpt
        icon {
            svg {
                src {
                    publicURL
                }
            }
        }
    }
`;
