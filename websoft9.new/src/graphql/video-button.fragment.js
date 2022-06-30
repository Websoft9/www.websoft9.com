import { graphql } from "gatsby";

export const query = graphql`
    fragment VideoButton on VideoButton {
        content
        link
    }
`;
