import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Text from "@ui/text";
import Anchor from "@ui/anchor";
import { BlogMetaWrap } from "./style";

const BlogMeta = ({ icon, text, path, className, ...restProps }) => {
    return (
        <BlogMetaWrap className={cn(className, "blog-meta")} {...restProps}>
            <Anchor path={path}>
                <i className={icon}></i>
                <Text as="span">{text}</Text>
            </Anchor>
        </BlogMetaWrap>
    );
};

BlogMeta.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
    path: PropTypes.string,
    className: PropTypes.string,
};

export default BlogMeta;
