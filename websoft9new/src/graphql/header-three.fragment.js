import { graphql } from "gatsby";

export const query = graphql`
    fragment HeaderThree on General {
        menu {
            ...Menu
        }
    }
`;
