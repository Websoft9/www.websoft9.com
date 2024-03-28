import Image from "@ui/image";
import React from "react";
import {
    BoxContentWrap, BoxImgInner,
    BoxImgWrap, BoxImgWrapper, HeadingWrap,
    TextWrap
} from "./style";

const BoxImage = ({ title, image, desc, links, className, ...restProps }) => {
    return (
        <BoxImgWrapper className={className} {...restProps}>
            <BoxImgInner style={{ boxShadow: 'none' }}>
                {image?.src && (
                    <BoxImgWrap>
                        <Image src={image.src} alt={image?.alt || title} />
                    </BoxImgWrap>
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
