import React from "react";
import ReactVivus from "react-vivus";
import {
    BoxContentWrap,
    BoxIconImg,
    BoxImgInner,
    BoxImgWrapper, HeadingWrap,
    TextWrap
} from "./style";

const BoxImage = ({ title, icon, desc, links, className, ...restProps }) => {
    return (
        <BoxImgWrapper className={className} {...restProps}>
            <BoxImgInner style={{ boxShadow: 'none' }}>
                {/* {image?.src && (
                    <BoxImgWrap>
                        <Image src={image.src} alt={image?.alt || title} />
                    </BoxImgWrap>
                )} */}
                {icon && (
                    <BoxIconImg>
                        <ReactVivus
                            id={`svg-${icon}`}
                            option={{
                                file: icon,
                                type: "oneByOne",
                                animTimingFunction: "EASE",
                                duration: 250,
                            }}
                        />
                    </BoxIconImg>
                )}
                <BoxContentWrap>
                    {title && <HeadingWrap><b>{title}</b></HeadingWrap>}
                    {desc && <TextWrap>{desc}</TextWrap>}
                    {
                        links &&
                        links.map((path, index) => (
                            <a key={path.key} href={path.value} target="_blank" rel="noopener noreferrer" style={{ color: '#0d6efd' }}>
                                {path.key}->
                            </a>
                        ))
                    }
                </BoxContentWrap>
                {/* <div style={{ marginTop: '-30px' }}>

                </div> */}
            </BoxImgInner>
        </BoxImgWrapper>
    );
};

export default BoxImage;
