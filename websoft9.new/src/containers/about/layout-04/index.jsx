import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Button from "@ui/button";
import SectionTitle from "@ui/section-title";
import MarkHeading from "@components/mark-heading";
import {
    SectionTitleType,
    ButtonType,
    TextType,
    HeadingType,
} from "@utils/types";
import { SectionWrap } from "./style";

const AboutArea = ({ data }) => {
    return (
        <SectionWrap>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        mb={["47px", null, "60px"]}
                        title={data.section_title?.title}
                        subtitle={data.section_title?.subtitle}
                    />
                )}

                <Row>
                    <Col
                        lg={{ span: 4, offset: 1 }}
                        mb={["10px", null, null, 0]}
                    >
                        {data?.headings?.[0] && (
                            <MarkHeading mr="48px" as={data.headings[0]?.level}>
                                {data.headings[0]?.content}
                            </MarkHeading>
                        )}
                        {data?.headings?.[1] && (
                            <Heading mt="30px" as={data.headings[1]?.level}>
                                {data.headings[1]?.content}
                            </Heading>
                        )}
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                        {data?.texts?.[0] && (
                            <Text fontSize="18px" mb="20px">
                                {data.texts[0]?.content}
                            </Text>
                        )}
                        {data?.buttons?.map(
                            ({ id, path, content, ...rest }) => (
                                <Button
                                    key={id}
                                    path={path}
                                    fontSize="15px"
                                    {...rest}
                                >
                                    {content}
                                </Button>
                            )
                        )}
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

AboutArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
    }),
};

export default AboutArea;
