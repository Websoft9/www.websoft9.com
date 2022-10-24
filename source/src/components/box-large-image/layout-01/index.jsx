import Button from "@ui/button";
import Image from "@ui/image";
import { ImageType } from "@utils/types";
import PropTypes from "prop-types";
import React from "react";
import {
    BoxLargeImgBtnInner, BoxLargeImgBtnWrap, BoxLargeImgContent, BoxLargeImgHeading, BoxLargeImgInner, BoxLargeImgLink, BoxLargeImgMedia, BoxLargeImgWrap, HeadingWrap,
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
                        <BoxLargeImgBtnWrap>
                            <BoxLargeImgBtnInner>
                                <Button
                                    color="light"
                                    disableHover={true}
                                    px="30px"
                                    path={path}
                                >
                                    Learn more
                                </Button>
                            </BoxLargeImgBtnInner>
                        </BoxLargeImgBtnWrap>
                        <BoxLargeImgHeading>
                            {title && <HeadingWrap>{title}</HeadingWrap>}
                        </BoxLargeImgHeading>
                        <BoxLargeImgLink path={path}>{title}</BoxLargeImgLink>
                    </BoxLargeImgMedia>
                )}
                <BoxLargeImgContent>
                    {desc && (
                        <TextWrap dangerouslySetInnerHTML={{ __html: desc }} />
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
    path: PropTypes.string,
    className: PropTypes.string,
};

BoxLargeImage.defaultProps = {
    path: "/",
};

export default BoxLargeImage;
