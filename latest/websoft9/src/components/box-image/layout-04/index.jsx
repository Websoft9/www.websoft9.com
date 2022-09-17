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
                {image && (
                    <BoxImgMediaWrap>
                        <Image src={image} />
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
    title: PropTypes.string,
    desc: PropTypes.string,
    path: PropTypes.string,
    className: PropTypes.string,
};

BoxImage.defaultProps = {
    path: "/",
};

export default BoxImage;
