import Button from "@ui/button";
import Image from "@ui/image";
import { ImageType } from "@utils/types";
import PropTypes from "prop-types";
import React from "react";
import {
    BoxLargeImgBtnWrap, BoxLargeImgContent, BoxLargeImgInner, BoxLargeImgLink, BoxLargeImgMedia, BoxLargeImgWrap, HeadingWrap,
    TextWrap
} from "./style";

const BoxLargeImage = ({
    image,
    title,
    desc,
    path,
    className,
    ...restProps
}) => {
    return (
        <BoxLargeImgWrap className={className} {...restProps}>
            <BoxLargeImgInner>
                {image?.src && (
                    <BoxLargeImgMedia>
                        <Image src={image.src} alt={image?.alt || title} />
                        {path && (
                            <BoxLargeImgLink path={path}>
                                {title}
                            </BoxLargeImgLink>
                        )}
                    </BoxLargeImgMedia>
                )}
                <BoxLargeImgContent>
                    {title && <HeadingWrap>{title}</HeadingWrap>}
                    {desc && <TextWrap>{desc}</TextWrap>}
                    {path && (
                        <BoxLargeImgBtnWrap>
                            <Button
                                className="button"
                                path={path}
                                icon="far fa-long-arrow-right"
                                iconposition="right"
                                icondistance="4px"
                                fontWeight={400}
                                variant="texted"
                            >
                                Discover Now
                            </Button>
                        </BoxLargeImgBtnWrap>
                    )}
                </BoxLargeImgContent>
            </BoxLargeImgInner>
        </BoxLargeImgWrap>
    );
};

BoxLargeImage.propTypes = {
    title: PropTypes.string,
    image: PropTypes.shape(ImageType),
    desc: PropTypes.string,
    className: PropTypes.string,
    path: PropTypes.string,
};

export default BoxLargeImage;
