import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import ProgressCirle from "@ui/progress-circle/layout-01";
import { SectionWrap, ProgressCircleWrap } from "./style";

const ProgressCircleSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={3} sm={6}>
                        <ProgressCircleWrap>
                            <ProgressCirle
                                value={75}
                                rotation={0.25}
                                text="01"
                            />
                        </ProgressCircleWrap>
                    </Col>
                    <Col lg={3} sm={6}>
                        <ProgressCircleWrap>
                            <ProgressCirle
                                value={75}
                                rotation={0.25}
                                variant="gradient"
                                startColor="#fad961"
                                endColor="#f76b1c"
                                gradientId="progress"
                                text="02"
                            />
                        </ProgressCircleWrap>
                    </Col>
                    <Col lg={3} sm={6}>
                        <ProgressCircleWrap>
                            <ProgressCirle
                                value={75}
                                rotation={0.25}
                                icon="fa fa-congs"
                            />
                        </ProgressCircleWrap>
                    </Col>
                    <Col lg={3} sm={6}>
                        <ProgressCircleWrap>
                            <ProgressCirle
                                value={75}
                                rotation={0.25}
                                variant="gradient"
                                startColor="#fad961"
                                endColor="#f76b1c"
                                gradientId="progress-2"
                                icon="fa fa-congs"
                            />
                        </ProgressCircleWrap>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default ProgressCircleSection;
