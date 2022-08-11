module.exports = `
type Author implements Node {
    id: ID!
    name: String!
    slug: String!
    image: Image
    bio: String!
    socials: [Social]
}
`;
