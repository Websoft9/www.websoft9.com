import { graphql } from "gatsby";

export const query = graphql`
    fragment HeaderTwo on General {
        contact_info {
            ...ContactInfo
        }
        menu {
            ...Menu
        }
    }
`;
