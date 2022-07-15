import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import ConsultForm from "@components/forms/consult-form";
import Anchor from "@ui/anchor";
import Text from "@ui/text";
import LocationButton from "@ui/location-button";
import { SectionTitleType, HeadingType, TextType } from "@utils/types";
import {
    ContactWrapper,
    ContactInfoBox,
    StyledTitle,
    StyledPhone,
    StyledBG,
} from "./style";

const ContactArea = ({ data }) => {
    return (
        <ContactWrapper>
            <StyledBG>
                <StaticImage
                    src="../../../assets/images/bg/contact-section-bg.png"
                    alt="Contact BG"
                />
            </StyledBG>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        mb={["30px", null, "53px"]}
                        layout={2}
                        textAlign="left"
                        title={data.section_title?.title}
                        subtitle={data.section_title?.subtitle}
                    />
                )}
                <Row>
                    <Col lg={6}>
                        <ConsultForm />
                    </Col>
                    <Col lg={5} ml="auto">
                        <ContactInfoBox>
                            {data?.headings?.[0] && (
                                <StyledTitle as={data.headings[0].level}>
                                    {data.headings[0].content}
                                </StyledTitle>
                            )}
                            {data?.headings?.[1] && (
                                <StyledPhone as={data.headings[1].level}>
                                    <Anchor
                                        path="/"
                                        $hover={{ layout: 2, color: "#002fa6" }}
                                    >
                                        {data.headings[1].content}
                                    </Anchor>
                                </StyledPhone>
                            )}
                            {data?.texts?.[0] && (
                                <Text>{data.texts[0].content}</Text>
                            )}
                            <LocationButton mt="20px" />
                        </ContactInfoBox>
                    </Col>
                </Row>
            </Container>
        </ContactWrapper>
    );
};

ContactArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
    }),
};

export default ContactArea;
