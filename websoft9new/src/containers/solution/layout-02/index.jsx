import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import { HeadingType, ItemType } from "@utils/types";
import {
    ProblemArea,
    ProblemBox,
    ProblemTextBox,
    StyledProblemTitle,
} from "./style";

const SolutionArea = ({ data }) => {
    return (
        <ProblemArea>
            <Container>
                <Row mb={["35px", null, null, "45px"]}>
                    {data?.headings?.[0] && (
                        <Col xs={6} md={4}>
                            <Heading as={data.headings[0]?.level}>
                                {data.headings[0]?.content}
                            </Heading>
                        </Col>
                    )}
                    {data?.headings?.[1] && (
                        <Col xs={6} md={{ span: 7, offset: 1 }}>
                            <Heading as={data.headings[1]?.level}>
                                {data.headings[1]?.content}
                            </Heading>
                        </Col>
                    )}
                </Row>
                {data?.items?.map((item) => (
                    <ProblemBox key={item.id}>
                        <Row>
                            <Col md={4}>
                                <ProblemTextBox>
                                    <i className="fal fa-long-arrow-right" />
                                    <StyledProblemTitle>
                                        {item.title}
                                    </StyledProblemTitle>
                                </ProblemTextBox>
                            </Col>
                            <Col md={{ span: 7, offset: 1 }}>
                                <ProblemTextBox>
                                    <i className="fal fa-check" />
                                    <p>{item.description}</p>
                                </ProblemTextBox>
                            </Col>
                        </Row>
                    </ProblemBox>
                ))}
            </Container>
        </ProblemArea>
    );
};

SolutionArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default SolutionArea;
