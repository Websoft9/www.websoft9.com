import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import { StaticImage } from "gatsby-plugin-image";
import Button from "@ui/button";
import { Container, Row, Col } from "@ui/wrapper";
import {
    HeadingType,
    ButtonType,
    ImageType,
    TextType,
    VideoButtonType,
} from "@utils/types";
import {
    HeroWrapper,
    HeroContent,
    HeroImagesWrap,
    HeroImageOne,
    HeroImageTwo,
    StyledSubtitle,
    StyledTitle,
} from "./style";

const HeroArea = ({ data }) => {
    return (
        <HeroWrapper>
            <Container fluid>
                <Row alignItems="center">
                    <Col lg={6} md={7}>
                        <HeroContent>
                            {data?.headings?.[0] && (
                                <StyledSubtitle
                                    as={data.headings[0]?.level}
                                    dangerouslySetInnerHTML={{
                                        __html: data.headings[0]?.content,
                                    }}
                                />
                            )}
                            {data?.headings?.[1] && (
                                <StyledTitle
                                    as={data.headings[1]?.level}
                                    dangerouslySetInnerHTML={{
                                        __html: data.headings[1]?.content,
                                    }}
                                />
                            )}

                            {data?.buttons?.map(
                                ({ id, path, content, ...rest }) => (
                                    <Button key={id} path={path} {...rest}>
                                        {content}
                                    </Button>
                                )
                            )}
                        </HeroContent>
                    </Col>
                    <Col lg={6} md={5}>
                        <HeroImagesWrap>
                            <HeroImageOne>
                                <StaticImage
                                    className="worldRotate"
                                    src="../../../assets/images/bg/mitech-slider-cybersecurity-global-image.png"
                                    alt="Hero Pattern"
                                />
                            </HeroImageOne>
                            {data?.images?.[0]?.src && (
                                <HeroImageTwo>
                                    <Image
                                        src={data.images[0].src}
                                        alt={data.images[0]?.alt || "Hero"}
                                    />
                                </HeroImageTwo>
                            )}
                        </HeroImagesWrap>
                    </Col>
                </Row>
            </Container>
        </HeroWrapper>
    );
};

HeroArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        video_button: PropTypes.shape(VideoButtonType),
    }),
};

export default HeroArea;
