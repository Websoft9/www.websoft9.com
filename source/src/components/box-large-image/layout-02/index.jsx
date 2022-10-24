import Button from "@ui/button";
import Image from "@ui/image";
import { Trans } from 'gatsby-plugin-react-i18next';
import React from "react";
import {
    BoxLargeImgBtnWrap, BoxLargeImgContent, BoxLargeImgInner, BoxLargeImgLink, BoxLargeImgMedia, BoxLargeImgWrap, CategoryWrap, HeadingWrap, TextWrap
} from "./style";

const BoxLargeImage = ({
    image,
    title,
    category,
    desc,
    path,
    btnText,
    className,
    layout,
    ...restProps
}) => {
    return (

        <BoxLargeImgWrap className={className} {...restProps}>
            <BoxLargeImgInner>
                {image?.src && (
                    <BoxLargeImgMedia>
                        <Image src={image.src} alt={image?.alt || title} />
                        {path && (
                            <BoxLargeImgLink path={path}>
                                {title}
                            </BoxLargeImgLink>
                        )}
                    </BoxLargeImgMedia>
                )}
                <BoxLargeImgContent $layout={layout}>
                    {category && <CategoryWrap>{category}</CategoryWrap>}
                    {title && (
                        <HeadingWrap as="h5" $layout={layout}>
                            {title}
                        </HeadingWrap>
                    )}
                    
                    {desc && <TextWrap $layout={layout}>{desc}</TextWrap>}
                    {path && (
                        <BoxLargeImgBtnWrap>
                            <Button
                                className="button"
                                path={path}
                                icon="far fa-long-arrow-right"
                                iconposition="right"
                                icondistance="4px"
                                variant="texted"
                                disableHover={true}
                            >
                                <Trans>{btnText}</Trans>
                            </Button>
                        </BoxLargeImgBtnWrap>
                    )}
                </BoxLargeImgContent>
            </BoxLargeImgInner>
        </BoxLargeImgWrap>
    );
};

BoxLargeImage.defaultProps = {
    btnText: "Discover Now",
};

export default BoxLargeImage;
