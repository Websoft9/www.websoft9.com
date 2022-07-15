import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import ProgressCirle from "@ui/progress-circle/layout-02";
import { SectionWrap, ProgressCircleWrap } from "./style";

const ProgressCircleSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={2} md={4} sm={6}>
                        <ProgressCircleWrap>
                            <ProgressCirle value={65} color="#5b63fe" />
                        </ProgressCircleWrap>
                    </Col>
                    <Col xl={2} md={4} sm={6}>
                        <ProgressCircleWrap>
                            <ProgressCirle value={75} color="#38cb89" />
                        </ProgressCircleWrap>
                    </Col>
                    <Col xl={2} md={4} sm={6}>
                        <ProgressCircleWrap>
                            <ProgressCirle value={85} color="#ffbb00" />
                        </ProgressCircleWrap>
                    </Col>
                    <Col xl={2} md={4} sm={6}>
                        <ProgressCircleWrap>
                            <ProgressCirle value={95} color="#ee7455" />
                        </ProgressCircleWrap>
                    </Col>
                    <Col xl={2} md={4} sm={6}>
                        <ProgressCircleWrap>
                            <ProgressCirle value={80} color="#9c7af2" />
                        </ProgressCircleWrap>
                    </Col>
                    <Col xl={2} md={4} sm={6}>
                        <ProgressCircleWrap>
                            <ProgressCirle value={90} color="#6cdacb" />
                        </ProgressCircleWrap>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default ProgressCircleSection;
