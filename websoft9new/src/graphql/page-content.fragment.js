import { graphql } from "gatsby";

export const query = graphql`
    fragment PageContent on PageContent {
        id
        section
        title
        show_form
        list
        texts {
            ...Text
        }
        headings {
            ...Heading
        }
        video_button {
            ...VideoButton
        }
        images {
            ...Image
        }
        section_title {
            ...SectionTitle
        }
        buttons {
            ...Button
        }
        motto {
            text
            linkText
            link
        }
        items {
            ...Item
        }
    }
`;
