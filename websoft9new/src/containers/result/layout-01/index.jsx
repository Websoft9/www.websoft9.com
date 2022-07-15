import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import { HeadingType, TextType } from "@utils/types";
import { StyledSection } from "./style";

const ResultArea = ({ data }) => {
    return (
        <StyledSection>
            <Container>
                <Row>
                    <Col lg={3} mb={["20px", null, null, 0]}>
                        {data?.headings?.[0] && (
                            <Heading as={data.headings[0]?.level}>
                                {data.headings[0]?.content}:
                            </Heading>
                        )}
                    </Col>
                    <Col lg={9}>
                        {data?.texts?.map((text, i) => (
                            <Text fontSize={["18px", null, "24px"]} key={i}>
                                {text.content}
                            </Text>
                        ))}
                    </Col>
                </Row>
            </Container>
        </StyledSection>
    );
};

ResultArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
    }),
};

export default ResultArea;
