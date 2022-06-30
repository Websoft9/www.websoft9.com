import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Image from "@ui/image";
import Ratings from "@components/ratings";
import BoxIcon from "@components/box-icon/layout-04";
import Anchor from "@ui/anchor";
import { HeadingType, TextType, ImageType } from "@utils/types";
import { SectionWrap, StyledBG } from "./style";

const ContactArea = ({ data }) => {
    return (
        <SectionWrap>
            <StyledBG>
                <StaticImage
                    src="../../../assets/images/bg/contact-bg.jpg"
                    alt="CTA BG"
                />
            </StyledBG>
            <Container>
                <Row alignItems="center">
                    <Col lg={7} mb={["43px", null, null, 0]}>
                        {data?.images?.[0].src && (
                            <Image
                                src={data.images[0].src}
                                alt={data.images[0]?.alt || "Contact Us"}
                            />
                        )}
                    </Col>
                    <Col
                        lg={4}
                        ml="auto"
                        textAlign="center"
                        mb={[null, null, null, "50px"]}
                    >
                        {data?.headings?.[0] && (
                            <Heading as={data.headings[0]?.level}>
                                {data.headings[0]?.content}
                            </Heading>
                        )}
                        <Ratings my="10px" rating={5} />
                        {data?.texts?.[0] && (
                            <Text fontSize="18px">{data.texts[0].content}</Text>
                        )}
                        {data?.contact && (
                            <>
                                {data.contact?.phone && (
                                    <Anchor
                                        display="block"
                                        path={`tel:${data.contact.phone}`}
                                    >
                                        <BoxIcon
                                            alignItems="center"
                                            textAlign="left"
                                            mt={["36px", null, null, "55px"]}
                                            layout={3}
                                            icon="fal fa-phone"
                                            heading="Call for advice now!"
                                            title={data.contact.phone}
                                        />
                                    </Anchor>
                                )}
                                {data.contact?.email && (
                                    <Anchor
                                        display="block"
                                        path={`mailto:${data.contact.email}`}
                                    >
                                        <BoxIcon
                                            alignItems="center"
                                            textAlign="left"
                                            mt={["36px", null, null, "55px"]}
                                            layout={3}
                                            icon="fal fa-envelope"
                                            heading="Say hello"
                                            title={data.contact.email}
                                        />
                                    </Anchor>
                                )}
                            </>
                        )}
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

ContactArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        contact: PropTypes.shape({
            phone: PropTypes.string,
            email: PropTypes.string,
        }),
    }),
};

export default ContactArea;
