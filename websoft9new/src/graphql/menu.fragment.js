import { graphql } from "gatsby";

export const query = graphql`
    fragment Menu on Menu {
        id
        text
        link
        submenu {
            id
            text
            link
        }
        megamenu {
            title
            submenu {
                id
                text
                link
            }
        }
    }
`;
