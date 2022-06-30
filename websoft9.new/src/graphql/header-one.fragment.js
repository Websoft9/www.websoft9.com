import { graphql } from "gatsby";

export const query = graphql`
    fragment HeaderOne on General {
        slogan
        menu {
            ...Menu
        }
    }
`;
