import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import ProgressBarThree from "@ui/progress-bar/layout-03";
import ProgressBarFour from "@ui/progress-bar/layout-04";
import { SectionWrap, ProgressOneWrap, ProgressTwoWrap } from "./style";

const ProgresBarSection = () => {
    const skills = [
        {
            title: "UI/UX",
            value: 85,
        },
        {
            title: "Ideas",
            value: 72,
        },
        {
            title: "Marketing",
            value: 89,
        },
        {
            title: "Consulting",
            value: 57,
        },
    ];
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={6}>
                        <ProgressOneWrap>
                            {skills &&
                                skills.map((skill, i) => (
                                    <ProgressBarThree
                                        key={`prog-one-${i}`}
                                        title={skill.title}
                                        value={skill.value}
                                    />
                                ))}
                        </ProgressOneWrap>
                    </Col>
                    <Col lg={6}>
                        <ProgressTwoWrap>
                            {skills &&
                                skills.map((skill, i) => (
                                    <ProgressBarFour
                                        key={`prog-two-${i}`}
                                        title={skill.title}
                                        value={skill.value}
                                        gradient={i + 1}
                                    />
                                ))}
                        </ProgressTwoWrap>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default ProgresBarSection;
