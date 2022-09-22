import React from "react";
import PropTypes from "prop-types";
import Button from "@ui/button";
import Image from "@ui/image";
import { ImageType } from "@utils/types";
import {
    BoxLargeImgWrap,
    BoxLargeImgInner,
    BoxLargeImgMedia,
    BoxLargeImgBtnWrap,
    BoxLargeImgBtnInner,
    BoxLargeImgHeading,
    HeadingWrap,
    TextWrap,
    BoxLargeImgLink,
    BoxLargeImgContent,
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
