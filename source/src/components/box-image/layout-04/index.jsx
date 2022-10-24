import Image from "@ui/image";
import PropTypes from "prop-types";
import React from "react";
import {
    BoxImgContent, BoxImgInner, BoxImgLink, BoxImgMediaWrap, BoxImgWrapper, HeadingWrap,
    TextWrap
} from "./style";

const BoxImage = ({ image, title, desc, path, className, ...restProps }) => {
    return (
        <BoxImgWrapper className={className} {...restProps}>
            <BoxImgInner>
                {image && (
                    <BoxImgMediaWrap>
                        <Image src={image} alt=""/>
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
