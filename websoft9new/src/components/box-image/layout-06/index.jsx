import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import { ImageType } from "@utils/types";
import Button from "@ui/button";
import {
    BoxImgWrapper,
    BoxImgInner,
    BoxImgMediaWrap,
    BoxImgContent,
    HeadingWrap,
    TextWrap,
    BoxImgBtnWrap,
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
                    {path && (
                        <BoxImgBtnWrap>
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
                        </BoxImgBtnWrap>
                    )}
                </BoxImgContent>
            </BoxImgInner>
        </BoxImgWrapper>
    );
};

BoxImage.propTypes = {
    path: PropTypes.string,
    image: PropTypes.shape(ImageType),
    title: PropTypes.string,
    desc: PropTypes.string,
    className: PropTypes.string,
};

export default BoxImage;
