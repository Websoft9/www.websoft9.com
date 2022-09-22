module.exports = `
type CaseStudy implements Node {
    id: ID!
    title: String!
    slug: String!
    category: String!
    excerpt: String!
    tagline: String
    logo: Image
    featured_image: Image
    slide_image: Image
    banner_image: Image
    is_featured: Boolean
    content: [CaseStudyContent]
}
type CaseStudyContent {
    id: ID!
    section: String!
    headings: [Heading]
    texts: [Text]
    tags: [String]
    client: Client
    images: [Image]
    video_button: VideoButton
    section_title: SectionTitle
    buttons: [Button]
    items: [CaseItem]
}
type Client {
    name: String
    designation: String
    company: String
}
type CaseItem {
    id: ID!
    title: String
    description: String
    images: [Image]
    designation: String
    name: String
    rating: Int
    description: String
}
`;
