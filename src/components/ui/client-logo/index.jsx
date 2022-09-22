import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import { ImageType } from "@utils/types";
import { BrandLogoWrap } from "./style";

const ClientLogo = ({ path, image, hoverImage, title, layout, ...props }) => {
    return (
        <BrandLogoWrap $layout={layout} {...props}>
            <a href={path}>
                <div className="brand-logo__image">
                    {image?.src && (
                        <Image src={image.src} alt={image?.alt || title} />
                    )}
                </div>
                {(layout === 1 || layout === 2) && (
                    <div className="brand-logo__image-hover">
                        {hoverImage?.src && (
                            <Image
                                src={hoverImage.src}
                                alt={hoverImage?.alt || title}
                            />
                        )}
                    </div>
                )}
            </a>
        </BrandLogoWrap>
    );
};

ClientLogo.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.shape(ImageType),
    hoverImage: PropTypes.shape(ImageType),
    layout: PropTypes.oneOf([1, 2, 3, 4]),
};

ClientLogo.defaultProps = {
    layout: 1,
    path: "/",
    title: "Brand Logo",
};

export default ClientLogo;
