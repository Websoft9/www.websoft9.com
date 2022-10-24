import Image from "@ui/image";
import React from "react";
import {
    BoxImgContent, BoxImgInner, BoxImgLink, BoxImgMedia, BoxImgWrapper, HeadingWrap
} from "./style";

const BoxImage = ({ image, title, path, className, ...restProps }) => {
    return (
        <BoxImgWrapper className={className} {...restProps}>
            <BoxImgInner>
                {image && (
                    <BoxImgMedia>
                        <Image src={image} alt="" />
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
