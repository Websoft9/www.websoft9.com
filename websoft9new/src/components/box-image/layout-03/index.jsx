import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import { ImageType } from "@utils/types";
import { truncateString } from "@utils";
import {
    BoxImgWrapper,
    BoxImgInner,
    BoxImgMedia,
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
                    <BoxImgMedia>
                        <Image src={image.src} alt={image?.alt || title} />
                    </BoxImgMedia>
                )}
                <BoxImgContent>
                    {title && <HeadingWrap>{title}</HeadingWrap>}
                    {desc && <TextWrap>{truncateString(desc, 80)}</TextWrap>}
                </BoxImgContent>
                <BoxImgLink to={path}>{title}</BoxImgLink>
            </BoxImgInner>
        </BoxImgWrapper>
    );
};

BoxImage.propTypes = {
    desc: PropTypes.string,
    image: PropTypes.shape(ImageType),
    title: PropTypes.string,
    path: PropTypes.string,
    className: PropTypes.string,
};

BoxImage.defaultProps = {
    path: "/",
};

export default BoxImage;
