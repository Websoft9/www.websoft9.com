import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import { HeadingType, TextType } from "@utils/types";
import {
    StyledSection,
    StyledTitle,
    StyledMarkHeading,
    StyledText,
} from "./style";

const IntroArea = ({ data }) => {
    return (
        <StyledSection>
            <Container>
                <Row>
                    <Col lg={4}>
                        {data?.headings?.[0] && (
                            <StyledTitle
                                as={data.headings[0]?.level}
                                dangerouslySetInnerHTML={{
                                    __html: data.headings[0].content,
                                }}
                            />
                        )}
                    </Col>
                    <Col lg={{ span: 7, offset: 1 }}>
                        {data?.headings?.[1] && (
                            <StyledMarkHeading
                                as={data.headings[1]?.level}
                                dangerouslySetInnerHTML={{
                                    __html: data.headings[1].content,
                                }}
                            />
                        )}
                        {data?.texts?.map((text, i) => (
                            <StyledText
                                key={i}
                                dangerouslySetInnerHTML={{
                                    __html: text.content,
                                }}
                            />
                        ))}
                    </Col>
                </Row>
            </Container>
        </StyledSection>
    );
};

IntroArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
    }),
};

export default IntroArea;
