import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import { ImageType } from "@utils/types";
import {
    BoxImgWrapper,
    BoxImgInner,
    BoxImgWrap,
    BoxContentWrap,
    BoxCircleBtnWrap,
    BoxCircleBtnInner,
    HeadingWrap,
    TextWrap,
    BoxCircleBtn,
} from "./style";

const BoxImage = ({ title, image, desc, path, className, ...restProps }) => {
    return (
        <BoxImgWrapper className={className} {...restProps}>
            <BoxImgInner>
                {image?.src && (
                    <BoxImgWrap>
                        <Image src={image.src} alt={image?.alt || title} />
                    </BoxImgWrap>
                )}
                <BoxContentWrap>
                    {title && <HeadingWrap>{title}</HeadingWrap>}
                    {desc && <TextWrap>{desc}</TextWrap>}
                    <BoxCircleBtnWrap>
                        <BoxCircleBtnInner>
                            <div className="middle-dot"></div>
                            <div className="middle-dot dot-2"></div>
                            <BoxCircleBtn to={path}>
                                <i className="icon far fa-long-arrow-right"></i>
                            </BoxCircleBtn>
                        </BoxCircleBtnInner>
                    </BoxCircleBtnWrap>
                </BoxContentWrap>
            </BoxImgInner>
        </BoxImgWrapper>
    );
};

BoxImage.propTypes = {
    path: PropTypes.string,
    image: PropTypes.shape(ImageType),
    desc: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
};

BoxImage.defaultProps = {
    path: "/",
};

export default BoxImage;
