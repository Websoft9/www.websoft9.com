module.exports = `
type Page implements Node {
    id: ID!
    title: String!
    pageType: String!
    content: [PageContent]
}
enum PageType {
    frontpage
    innerpage
}
type PageContent {
    id: ID!
    section: String!
    show_form: Boolean
    headings: [Heading]
    texts: [Text]
    items: [Item]
    section_title: SectionTitle
    images: [Image]
    buttons: [Button]
    video_button: VideoButton
    motto: Motto
}
`;
