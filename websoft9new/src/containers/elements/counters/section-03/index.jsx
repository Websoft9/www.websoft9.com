import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Counter from "@components/counter/layout-03";
import {
    SectionWrap,
    HeaderWrap,
    StyledHeading,
    StyledMarkHeading,
} from "./style";

const Section = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={{ span: 4, offset: 1 }}>
                        <HeaderWrap>
                            <StyledMarkHeading>
                                <mark>38</mark> YEARS’ EXPERIENCE IN IT
                            </StyledMarkHeading>
                            <StyledHeading>
                                Learn more about our{" "}
                                <span>Success Stories</span>
                            </StyledHeading>
                        </HeaderWrap>
                    </Col>
                    <Col lg={7} md={8}>
                        <Row>
                            <Col sm={6}>
                                <Counter
                                    countTo={1790}
                                    text="ACCOUNT NUMBERS"
                                />
                            </Col>
                            <Col sm={6}>
                                <Counter
                                    countTo={32}
                                    text="FINISHED PROJECTS"
                                />
                            </Col>
                            <Col sm={6}>
                                <Counter countTo={73} text="HAPPY CLIENTS" />
                            </Col>
                            <Col sm={6}>
                                <Counter countTo={318} text="BLOG POSTS" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default Section;
