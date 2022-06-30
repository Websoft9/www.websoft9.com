import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Text from "@ui/text";
import Button from "@ui/button";
import Image from "@ui/image";
import { HeadingType, TextType, ButtonType, ImageType } from "@utils/types";
import {
    HeroWrapper,
    HeroTextBox,
    ImageBoxWrap,
    ImageBoxOne,
    ImageBoxTwo,
    StyledTitle,
    StyledSubtitle,
} from "./style";

const HeroArea = ({ data }) => {
    return (
        <HeroWrapper>
            <Container fluid>
                <Row alignItems="center">
                    <Col md={6}>
                        <HeroTextBox>
                            {data?.headings?.[0] && (
                                <StyledSubtitle as={data.headings[0].level}>
                                    {data.headings[0].content}
                                </StyledSubtitle>
                            )}
                            {data?.headings?.[1] && (
                                <StyledTitle
                                    as={data.headings[1].level}
                                    dangerouslySetInnerHTML={{
                                        __html: data.headings[1].content,
                                    }}
                                />
                            )}
                            {data?.texts?.[0] && (
                                <Text>{data.texts[0].content}</Text>
                            )}
                            {data?.buttons?.map(
                                ({ id, path, content, ...rest }) => (
                                    <Button
                                        key={id}
                                        mt="15px"
                                        path={path}
                                        {...rest}
                                    >
                                        {content}
                                    </Button>
                                )
                            )}
                        </HeroTextBox>
                    </Col>
                    <Col md={6}>
                        <ImageBoxWrap>
                            {data?.images[0]?.src && (
                                <ImageBoxOne>
                                    <Image
                                        src={data.images[0].src}
                                        alt={
                                            data.images[0]?.alt || "Infotechno"
                                        }
                                    />
                                </ImageBoxOne>
                            )}
                            {data?.images[1]?.src && (
                                <ImageBoxTwo>
                                    <Image
                                        src={data.images[1].src}
                                        alt={
                                            data.images[1]?.alt || "Infotechno"
                                        }
                                    />
                                </ImageBoxTwo>
                            )}
                        </ImageBoxWrap>
                    </Col>
                </Row>
            </Container>
        </HeroWrapper>
    );
};

HeroArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

export default HeroArea;
