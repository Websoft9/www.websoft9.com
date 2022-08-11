import PropTypes from "prop-types";

export const IDType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

export const ImageType = {
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
        .isRequired,
    alt: PropTypes.string,
};
export const SvgIconType = {
    svg: PropTypes.shape({
        src: PropTypes.shape({
            publicURL: PropTypes.string,
        }),
    }),
    alt: PropTypes.string,
};

export const HeadingType = {
    level: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
    content: PropTypes.string.isRequired,
};
export const TextType = {
    content: PropTypes.string.isRequired,
};

export const VideoButtonType = {
    link: PropTypes.string.isRequired,
    content: PropTypes.string,
};

export const SectionTitleType = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
};

export const ButtonPropType = {
    className: PropTypes.string,
    path: PropTypes.string,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    onClick: PropTypes.func,
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "gradient",
        "transparent",
        "white",
    ]),
    size: PropTypes.oneOf(["large", "medium", "small", "xsmall"]),
    shape: PropTypes.oneOf(["square", "rounded", "ellipse", "circle"]),
    variant: PropTypes.oneOf([
        "outlined",
        "texted",
        "underlined",
        "onlyIcon",
        "contained",
    ]),
    fullwidth: PropTypes.bool,
    iconposition: PropTypes.oneOf(["left", "right"]),
    icondistance: PropTypes.string,
    stickyBtn: PropTypes.bool,
    imgbutton: PropTypes.bool,
    shadow: PropTypes.bool,
    hoverStyle: PropTypes.oneOf(["one", "two", "three"]),
    disableHover: PropTypes.bool,
};

export const ButtonType = {
    content: PropTypes.string,
    ...ButtonPropType,
};

export const ButtonComponentType = {
    children: PropTypes.node.isRequired,
    ...ButtonPropType,
};

export const SocialType = {
    id: IDType,
    icon: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
};

export const MottoType = {
    text: PropTypes.string,
    linkText: PropTypes.string,
    link: PropTypes.string,
};

export const ItemType = {
    id: IDType,
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.shape(SvgIconType),
    slug: PropTypes.string,
    name: PropTypes.string,
    designation: PropTypes.string,
    socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
    subject: PropTypes.string,
    featured_image: PropTypes.shape(ImageType),
    iconClass: PropTypes.string,
};

export const BlogPostedAtType = {
    date: PropTypes.string,
    slug: PropTypes.string,
};

export const BlogMetaType = {
    title: PropTypes.string,
    slug: PropTypes.string,
};

export const BlogFormatType = PropTypes.oneOf(["image", "quote", "video"]);

export const AuthorType = {
    id: IDType,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.shape(ImageType),
    bio: PropTypes.string,
};

export const BlogType = {
    id: IDType,
    title: PropTypes.string,
    slug: PropTypes.string,
    postedAt: PropTypes.shape(BlogPostedAtType),
    author: PropTypes.shape(AuthorType),
    excerpt: PropTypes.string,
    format: BlogFormatType,
    image: PropTypes.shape(ImageType),
    categories: PropTypes.arrayOf(PropTypes.shape(BlogMetaType)),
    tags: PropTypes.arrayOf(PropTypes.shape(BlogMetaType)),
};

export const SoicalType = {
    id: IDType,
    title: PropTypes.string,
    link: PropTypes.string,
    icon: PropTypes.string,
};
