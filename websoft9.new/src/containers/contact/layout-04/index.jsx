import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Ratings from "@components/ratings";
import BoxIcon from "@components/box-icon/layout-04";
import Anchor from "@ui/anchor";
import ContactFrom from "@components/forms/contact-form";
import { HeadingType, TextType } from "@utils/types";
import {
    SectionWrap,
    ContactInfoBox,
    ContactFormBox,
    ContactFormTitle,
    StyledBG,
} from "./style";

const ContactArea = ({ data }) => {
    return (
        <SectionWrap>
            <StyledBG>
                <StaticImage
                    src="../../../assets/images/bg/contact-section-bg-3.png"
                    alt="contact BG"
                />
            </StyledBG>
            <Container>
                <Row alignItems="center">
                    <Col lg={4}>
                        <ContactInfoBox>
                            {data?.headings?.[0] && (
                                <Heading
                                    as={data.headings[0]?.level}
                                    color="#fff"
                                >
                                    {data.headings[0]?.content}
                                </Heading>
                            )}
                            <Ratings my="10px" rating={5} />
                            {data?.texts?.[0] && (
                                <Text fontSize="18px" color="#fff">
                                    {data.texts[0].content}
                                </Text>
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
                                                mt="55px"
                                                layout={2}
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
                                                mt="55px"
                                                layout={2}
                                                icon="fal fa-envelope"
                                                heading="Say hello"
                                                title={data.contact.email}
                                            />
                                        </Anchor>
                                    )}
                                </>
                            )}
                        </ContactInfoBox>
                    </Col>
                    <Col lg={7} ml="auto">
                        <ContactFormBox>
                            <ContactFormTitle>
                                <Heading as="h3" mb="10px">
                                    Need a hand?
                                </Heading>
                                <Text>
                                    Reach out to the world’s most reliable IT
                                    services.
                                </Text>
                            </ContactFormTitle>
                            <ContactFrom />
                        </ContactFormBox>
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
        contact: PropTypes.shape({
            phone: PropTypes.string,
            email: PropTypes.string,
        }),
    }),
};

export default ContactArea;
