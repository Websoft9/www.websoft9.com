module.exports = `
type ItSolution implements Node {
    id: ID!
    title: String!
    slug: String!
    tagline: String
    excerpt: String!
    is_featured: Boolean
    icon: Icon
    featured_image: Image
    banner_image: Image
    content: [ItSolutionContent]
}

type ItSolutionContent {
    id: ID!
    section: String!
    headings: [Heading]
    texts: [Text]
    items: [SolutionItem]
    video_button: VideoButton
    buttons: [Button]
    section_title: SectionTitle
    images: [Image]
}
type SolutionItem {
    id: ID!
    title: String
    description: String
    images: [Image]
}
`;
