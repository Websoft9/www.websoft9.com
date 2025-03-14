import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";

const Image = ({ src, alt, className, layout }) => {
    let boxImage;
    if (typeof src === "object") {
        boxImage = (
            <GatsbyImage
                image={getImage(src)}
                alt={alt}
                className={className}
                layout={layout}
            />
        );
    } else {
        boxImage = <img src={src} alt={alt} className={className} />;
    }
    return boxImage;
};

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
        .isRequired,
    alt: PropTypes.string,
    layout: PropTypes.string,
};

export default Image;
