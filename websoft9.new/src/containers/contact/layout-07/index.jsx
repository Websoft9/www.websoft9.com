import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Anchor from "@ui/anchor";
import { ItemType } from "@utils/types";
import { ContactInfoWrapper } from "./style";

const ContactArea = ({ data }) => {
    return (
        <ContactInfoWrapper>
            <Container>
                <Row>
                    {data?.items?.map((info) => (
                        <Col lg={4} key={info.id} mb="30px">
                            {info.title && (
                                <Heading as="h5" mb="20px">
                                    {info.title}
                                </Heading>
                            )}
                            {info?.texts && (
                                <>
                                    {info.texts?.[0] && (
                                        <Text mb="7px">
                                            {info.texts[0]?.content}
                                        </Text>
                                    )}
                                    {info.texts?.[1] && (
                                        <Anchor
                                            mb="7px"
                                            path={`mailto:${info.texts[1]?.content}`}
                                        >
                                            {info.texts[1]?.content}
                                        </Anchor>
                                    )}
                                    {info.texts?.[2] && (
                                        <Text
                                            mb="7px"
                                            fontWeight={800}
                                            color="heading"
                                        >
                                            {info.texts[2]?.content}
                                        </Text>
                                    )}
                                </>
                            )}
                        </Col>
                    ))}
                </Row>
            </Container>
        </ContactInfoWrapper>
    );
};

ContactArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default ContactArea;
