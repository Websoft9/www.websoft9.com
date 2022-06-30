module.exports = `
type Site implements Node {
    id: ID!
    siteMetadata: SiteMetadata
}
type SiteMetadata {
    copyright: String
    socials: [Social]
    contact: Contact
    title: String
    description: String
    author: String
    siteUrl: String
    canonical: String
    siteLanguage: String
    image: String
    titleTemplate: String
    twitterUsername: String
    getform: String
}
type Contact {
    phone: String
    email: String
    address: String
    website: String
}
`;
