import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import ContactForm from "@components/forms/contact-form";
import MarkHeading from "@components/mark-heading";
import { HeadingType, TextType } from "@utils/types";
import { StyledSection, LeftBox, StyledHeading, StyledDesc } from "./style";

const ContactArea = ({ data }) => {
    return (
        <StyledSection>
            <Container>
                <Row alignItems="center">
                    <Col lg={6}>
                        <LeftBox>
                            {data?.headings?.[0] && (
                                <StyledHeading
                                    as={data.headings[0].level}
                                    dangerouslySetInnerHTML={{
                                        __html: data.headings[0].content,
                                    }}
                                />
                            )}
                            {data?.texts?.[0] && (
                                <StyledDesc>{data.texts[0].content}</StyledDesc>
                            )}
                        </LeftBox>
                    </Col>
                    <Col lg={6}>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </StyledSection>
    );
};

ContactArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
    }),
};

export default ContactArea;
