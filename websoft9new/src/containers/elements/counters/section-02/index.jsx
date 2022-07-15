import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Counter from "@components/counter/layout-02";
import { SectionWrap } from "./style";

const Section = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col md={3} sm={6}>
                        <Counter
                            layout={2}
                            mb="30px"
                            countTo={1056}
                            text="HAPPY CLIENTS"
                        />
                    </Col>
                    <Col md={3} sm={6}>
                        <Counter
                            layout={2}
                            mb="30px"
                            countTo={491}
                            text="FINISHED PROJECTS"
                        />
                    </Col>
                    <Col md={3} sm={6}>
                        <Counter
                            layout={2}
                            mb="30px"
                            countTo={245}
                            text="SKILLED EXPERTS"
                        />
                    </Col>
                    <Col md={3} sm={6}>
                        <Counter
                            layout={2}
                            mb="30px"
                            countTo={1090}
                            text="MEDIA POSTS"
                        />
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default Section;
