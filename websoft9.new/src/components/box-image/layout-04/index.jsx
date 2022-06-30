import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import { ImageType } from "@utils/types";
import {
    BoxImgWrapper,
    BoxImgInner,
    BoxImgMediaWrap,
    BoxImgContent,
    HeadingWrap,
    TextWrap,
    BoxImgLink,
} from "./style";

const BoxImage = ({ image, title, desc, path, className, ...restProps }) => {
    return (
        <BoxImgWrapper className={className} {...restProps}>
            <BoxImgInner>
                {image?.src && (
                    <BoxImgMediaWrap>
                        <Image src={image.src} alt={image?.alt || title} />
                    </BoxImgMediaWrap>
                )}
                <BoxImgContent>
                    {title && <HeadingWrap>{title}</HeadingWrap>}
                    {desc && <TextWrap>{desc}</TextWrap>}
                </BoxImgContent>
                {path && <BoxImgLink to={path}>{title}</BoxImgLink>}
            </BoxImgInner>
        </BoxImgWrapper>
    );
};

BoxImage.propTypes = {
    image: PropTypes.shape(ImageType),
    title: PropTypes.string,
    desc: PropTypes.string,
    path: PropTypes.string,
    className: PropTypes.string,
};

BoxImage.defaultProps = {
    path: "/",
};

export default BoxImage;
