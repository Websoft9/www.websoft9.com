import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { Link } from "gatsby";
import Image from "@ui/image";
import { ImageType } from "@utils/types";
import { NavItem, NavInner } from "./style";

const PostNav = ({ title, slug, image, rel, className }) => {
    return (
        <NavItem
            rel={rel}
            $hasImage={image}
            className={cn(className, "post-nav")}
        >
            <Link to={`/${slug}`}>
                {image?.src && (
                    <Image src={image.src} alt={image?.alt || title} />
                )}
                <NavInner rel={rel}>
                    <h6>{title}</h6>
                    <i className="icon fa fa-angle-right"></i>
                </NavInner>
            </Link>
        </NavItem>
    );
};

PostNav.propTypes = {
    title: PropTypes.string,
    slug: PropTypes.string,
    image: PropTypes.shape(ImageType),
    rel: PropTypes.string,
    className: PropTypes.string,
};

export default PostNav;
