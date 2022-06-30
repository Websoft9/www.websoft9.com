import { graphql } from "gatsby";

export const query = graphql`
    fragment Item on Item {
        id
        title
        description
        name
        designation
        rating
        subject
        path
        socials {
            ...Social
        }
        count
        images {
            ...Image
        }
        is_featured
        price
        list {
            id
            text
        }
        period
        texts {
            content
        }
        value
        year
        type
        iconClass
        color
    }
`;
