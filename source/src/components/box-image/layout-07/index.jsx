import PropTypes from "prop-types";
import React from "react";
import ReactVivus from "react-vivus";
import {
    BoxIconImg, BoxImgContent, BoxImgInner, BoxImgWrapper, HeadingWrap,
    TextWrap
} from "./style";

const BoxImage = ({ id,icon, title, desc,className, ...restProps }) => {
    return (
        <BoxImgWrapper className={className} {...restProps}>
            <BoxImgInner>
                {icon && (
                    <BoxIconImg>
                        <ReactVivus
                            id={`svg-${id}`}
                            option={{
                                file: icon,
                                type: "oneByOne",
                                animTimingFunction: "EASE",
                                duration: 250,
                            }}
                        />
                    </BoxIconImg>
                )}
                <BoxImgContent>
                    {title && <HeadingWrap>{title}</HeadingWrap>}
                    {desc && <TextWrap>{desc}</TextWrap>}
                </BoxImgContent>
            </BoxImgInner>
        </BoxImgWrapper>
    );
};

BoxImage.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
};

export default BoxImage;
