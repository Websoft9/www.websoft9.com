import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Anchor from "@ui/anchor";
import Image from "@ui/image";
import { ImageType } from "@utils/types";
import { AuthorMetaWrap } from "./style";

const AuthorMeta = ({ slug, name, image, className, ...restProps }) => {
    return (
        <AuthorMetaWrap className={cn(className, "author-meta")} {...restProps}>
            <Anchor path={`/profile/${slug}`}>
                {image?.src && (
                    <Image src={image.src} alt={image?.alt || name} />
                )}
                <span>{name}</span>
            </Anchor>
        </AuthorMetaWrap>
    );
};

AuthorMeta.propTypes = {
    slug: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.shape(ImageType),
    className: PropTypes.string,
};

export default AuthorMeta;
