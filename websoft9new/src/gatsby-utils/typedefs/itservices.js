module.exports = `
type ItService implements Node {
    id: ID!
    title: String!
    slug: String!
    tagline: String
    excerpt: String!
    is_featured: Boolean
    icon: Icon
    featured_image: Image
    banner_image: Image
    content: [ItServiceContent]
}

type ItServiceContent {
    id: ID!
    section: String!
    headings: [Heading]
    texts: [Text]
    items: [ServiceItem]
    video_button: VideoButton
    buttons: [Button]
    section_title: SectionTitle
    images: [Image]
}
type ServiceItem {
    id: ID!
    title: String
    description: String
    images: [Image]
}
`;
