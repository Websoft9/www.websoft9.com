import Anchor from "@ui/anchor";
import Image from "@ui/image";
import React from "react";
import {
    BoxImgContent, BoxImgInner,
    BoxImgMediaWrap, BoxImgWrapper, HeadingWrap,
    TextWrap
} from "./style";

const BoxImage = ({ image, title, desc, path,className, ...restProps }) => {
    return (
        <BoxImgWrapper className={className} {...restProps}>          
                <BoxImgInner>
                    <Anchor  path={path} style={{display:'block'}}>
                        {image?.src && (
                            <BoxImgMediaWrap>
                                <Image src={image.src} alt={image?.alt || title} />
                            </BoxImgMediaWrap>
                        )}
                        <BoxImgContent>
                            {title && <HeadingWrap>{title}</HeadingWrap>}
                            {desc && <TextWrap>{desc}</TextWrap>}
                        </BoxImgContent>
                    </Anchor>
                </BoxImgInner>
            
        </BoxImgWrapper>
    );
};

export default BoxImage;
