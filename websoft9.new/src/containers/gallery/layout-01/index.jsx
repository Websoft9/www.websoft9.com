import React, { useState } from "react";
import PropTypes from "prop-types";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Container, Row, Col } from "@ui/wrapper";
import Button from "@ui/button";
import Image from "@ui/image";
import SectionTitle from "@ui/section-title";
import { SectionTitleType, ImageType, ButtonType } from "@utils/types";

import {
    SectionWrap,
    GalleryWrap,
    GalleryGrid,
    GalleryItem,
    GalleryOverlay,
    GalleryOverlayIcon,
    StyledTitleWrap,
} from "./style";

const GalleryArea = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const onClickHandler = (e, i) => {
        setIsOpen(true);
        setPhotoIndex(i);
    };

    return (
        <SectionWrap>
            <Container>
                <StyledTitleWrap>
                    {data?.section_title && (
                        <SectionTitle mb="15px" {...data.section_title} />
                    )}
                    {data?.buttons?.map(({ id, content, ...rest }) => (
                        <Button key={id} {...rest}>
                            {content}
                        </Button>
                    ))}
                </StyledTitleWrap>
                <Row>
                    <Col lg={12}>
                        <GalleryWrap>
                            {data?.images?.map((image, i) => (
                                <GalleryGrid key={image?.src.name}>
                                    <GalleryItem>
                                        <Image
                                            src={image.src}
                                            alt={image?.alt || "gallery"}
                                        />
                                        <GalleryOverlay />
                                        <GalleryOverlayIcon
                                            onClick={(e) =>
                                                onClickHandler(e, i)
                                            }
                                        >
                                            <i className="icon far fa-search"></i>
                                        </GalleryOverlayIcon>
                                    </GalleryItem>
                                </GalleryGrid>
                            ))}
                            {isOpen && (
                                <Lightbox
                                    mainSrc={
                                        data.images[photoIndex].src
                                            .childImageSharp.gatsbyImageData
                                            .images.fallback.src
                                    }
                                    nextSrc={
                                        data.images[
                                            (photoIndex + 1) %
                                                data.images.length
                                        ]
                                    }
                                    prevSrc={
                                        data.images[
                                            (photoIndex +
                                                data.images.length -
                                                1) %
                                                data.images.length
                                        ]
                                    }
                                    onCloseRequest={() => setIsOpen(false)}
                                    onMovePrevRequest={() =>
                                        setPhotoIndex(
                                            (photoIndex +
                                                data.images.length -
                                                1) %
                                                data.images.length
                                        )
                                    }
                                    onMoveNextRequest={() =>
                                        setPhotoIndex(
                                            (photoIndex + 1) %
                                                data.images.length
                                        )
                                    }
                                />
                            )}
                        </GalleryWrap>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

GalleryArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
    }),
};

export default GalleryArea;
