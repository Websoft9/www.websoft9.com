import { graphql } from "gatsby";

export const query = graphql`
    fragment Button on Button {
        id
        path
        content
        variant
        color
        shape
        size
        hoverStyle
        disableHover
        icon
        icondistance
        iconposition
        fontWeight
    }
`;
