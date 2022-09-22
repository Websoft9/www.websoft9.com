import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import { ImageType } from "@utils/types";
import {
    BoxImgWrapper,
    BoxImgInner,
    BoxImgMedia,
    BoxImgContent,
    HeadingWrap,
    BoxImgLink,
} from "./style";

const BoxImage = ({ image, title, path, className, ...restProps }) => {
    return (
        <BoxImgWrapper className={className} {...restProps}>
            <BoxImgInner>
                {image && (
                    <BoxImgMedia>
                        <Image src={image} />
                    </BoxImgMedia>
                )}
                <BoxImgContent>
                    {title && <HeadingWrap>{title}</HeadingWrap>}
                </BoxImgContent>
                <BoxImgLink to={path}>{title}</BoxImgLink>
            </BoxImgInner>
        </BoxImgWrapper>
    );
};

BoxImage.defaultProps = {
    path: "/",
};

export default BoxImage;
