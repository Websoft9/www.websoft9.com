module.exports = `
type Motto {
    text: String
    linkText: String
    link: String
}

type Social {
    id: ID!
    icon: String
    link: String
    title: String
}

type List {
    id: ID!
    text: String
}

type Heading {
    content: String!
    level: String
}
type Text {
    content: String!
}
type Image @infer{
    src: File @fileByRelativePath
    alt: String
}
type SvgImage @infer{
    src: File @fileByRelativePath
    alt: String
}
type Icon {
    svg: SvgImage
    images: [Image]
}
type SectionTitle {
    id: ID!
    title: String
    subtitle: String
    description: String
}
enum ButtonVariant {
    outlined
    texted
    underlined
    onlyIcon
    contained
}
enum ButtonColor {
    primary
    secondary
    success
    danger
    warning
    info
    light
    dark
    gradient
    transparent
    white
}
enum ButtonSize {
    xsmall
    small
    medium
    large
}
enum ButtonShape {
    rounded
    square
    ellipse
}
enum IconPosition {
    left
    right
}

enum ButonHoverStyle {
    one
    two
    three
}

type Button {
    id: ID!
    content: String!
    path: String
    variant: ButtonVariant
    color: ButtonColor
    size: ButtonSize
    shape: ButtonShape
    fullwidth: Boolean
    icon: String
    icondistance: String
    iconposition: IconPosition
    hoverStyle: ButonHoverStyle
    disableHover: Boolean
    fontWeight: Int
}
type VideoButton {
    id: ID!
    content: String
    link: String!
}
type Item{
    id: ID!
    title: String
    description: String
    images: [Image]
    texts: [Text]
    path: String
    name: String,
    iconClass: String,
    designation: String,
    socials: [Social]
    rating: Int
    subject: String
    list: [List]
    is_featured: Boolean
    price: Int
    period: String
    value: Int
    year: String
    type: String
    color: String
}
`;
