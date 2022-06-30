import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import { ImageType } from "@utils/types";
import {
    BoxImageWrap,
    BoxImageInner,
    BoxImageSrcWrap,
    BoxImageContent,
    Heading,
    Text,
} from "./style";

const BoxImage = ({ image, title, desc, className, ...restProps }) => {
    return (
        <BoxImageWrap className={className} {...restProps}>
            <BoxImageInner>
                {image?.src && (
                    <BoxImageSrcWrap>
                        <Image src={image.src} alt={image?.alt || title} />
                    </BoxImageSrcWrap>
                )}
                <BoxImageContent>
                    {title && <Heading>{title}</Heading>}
                    {desc && <Text>{desc}</Text>}
                </BoxImageContent>
            </BoxImageInner>
        </BoxImageWrap>
    );
};

BoxImage.propTypes = {
    image: PropTypes.shape(ImageType),
    title: PropTypes.string,
    desc: PropTypes.string,
    className: PropTypes.string,
};

export default BoxImage;
