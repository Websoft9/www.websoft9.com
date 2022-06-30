import { graphql } from "gatsby";

export const query = graphql`
    fragment ContactInfo on ContactInfo {
        id
        title
        text
        icon
    }
`;
