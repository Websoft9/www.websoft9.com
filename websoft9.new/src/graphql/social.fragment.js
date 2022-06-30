import { graphql } from "gatsby";

export const query = graphql`
    fragment Social on Social {
        id
        icon
        link
        title
    }
`;
