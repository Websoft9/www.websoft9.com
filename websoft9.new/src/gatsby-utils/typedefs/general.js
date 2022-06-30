module.exports = `
type General implements Node @childOf(types: ["GeneralJson"]){
    id: ID!
    section: String!
    contact_info: [ContactInfo]
    menu: [Menu]
    slogan: String
}
type ContactInfo {
    id: ID!
    title: String
    text: String
    icon: String
}
type Menu {
    id: ID!
    text: String!
    link: String!
    submenu: [Submenu]
    megamenu: [Megamenu]
}
type Submenu {
    id: ID!
    text: String!
    link: String!
}
type Megamenu {
    title: String
    submenu: [Submenu]
}
`;
