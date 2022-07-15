import React from "react";
import PropTypes from "prop-types";
import Button from "@ui/button";
import Image from "@ui/image";
import { ImageType } from "@utils/types";
import {
    BoxImgWrapper,
    BoxImgInner,
    BoxImgMedia,
    BoxImgContent,
    HeadingWrap,
    TextWrap,
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
                    {desc && <TextWrap>{desc}</TextWrap>}
                    {path && (
                        <Button
                            className="button"
                            path={path}
                            icon="far fa-long-arrow-right"
                            iconposition="right"
                            icondistance="4px"
                            variant="texted"
                        >
                            Discover Now
                        </Button>
                    )}
                </BoxImgContent>
            </BoxImgInner>
        </BoxImgWrapper>
    );
};

BoxImage.propTypes = {
    imageSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
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
