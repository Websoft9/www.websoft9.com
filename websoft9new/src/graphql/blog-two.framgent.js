import { graphql } from "gatsby";

export const query = graphql`
    fragment BlogTwo on Article {
        title
        slug
    }
`;
