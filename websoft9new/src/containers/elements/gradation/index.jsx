import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import Gradation from "@ui/gradation";
import { gradations } from "./data";
import {
    SectitonWrap,
    GradationRow,
    SectionTitleWrap,
    StepWrap,
    StyledTitle,
    StyledSubtitle,
} from "./style";

const GradationArea = () => {
    return (
        <SectitonWrap>
            <Container>
                <Row>
                    <Col md={6}>
                        <SectionTitleWrap>
                            <StyledSubtitle>HOW WE WORKS</StyledSubtitle>
                            <StyledTitle>
                                How it helps{" "}
                                <span>
                                    your <br /> business succeed
                                </span>
                            </StyledTitle>
                        </SectionTitleWrap>
                    </Col>
                    <Col md={6}>
                        <StepWrap>
                            <h3>
                                <mark>{`0${gradations.length}`}</mark>Steps
                            </h3>
                        </StepWrap>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <GradationRow>
                            {gradations.map((gradation, i) => (
                                <Gradation
                                    key={gradation.id}
                                    number={i + 1}
                                    isLast={i === gradations.length - 1}
                                    title={gradation.title}
                                    desc={gradation.desc}
                                    path={gradation.path}
                                />
                            ))}
                        </GradationRow>
                    </Col>
                </Row>
            </Container>
        </SectitonWrap>
    );
};

export default GradationArea;
