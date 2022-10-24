import Image from "@ui/image";
import { ImageType } from "@utils/types";
import PropTypes from "prop-types";
import React from "react";
import {
    BoxContentWrap, BoxImgInner,
    BoxImgWrap, BoxImgWrapper, HeadingWrap,
    TextWrap
} from "./style";

const BoxImage = ({ title, image, desc, path, className, ...restProps }) => {
    return (
        <BoxImgWrapper className={className} {...restProps}>
            <BoxImgInner>
                {image?.src && (
                    <BoxImgWrap>
                        <Image src={image.src} alt={image?.alt || title} />
                    </BoxImgWrap>
                )}
                <BoxContentWrap>
                    {title && <HeadingWrap>{title}</HeadingWrap>}
                    {desc && <TextWrap>{desc}</TextWrap>}
                </BoxContentWrap>
            </BoxImgInner>
        </BoxImgWrapper>
    );
};

BoxImage.propTypes = {
    path: PropTypes.string,
    image: PropTypes.shape(ImageType),
    desc: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
};

BoxImage.defaultProps = {
    path: "/",
};

export default BoxImage;
