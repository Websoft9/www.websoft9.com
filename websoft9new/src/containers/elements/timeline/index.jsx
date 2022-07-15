import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import Timeline from "@ui/timeline";
import { SectionWrap } from "./style";

import ImageOne from "@data/images/box-image/timeline-image-01.jpg";
import ImageTwo from "@data/images/box-image/timeline-image-02.jpg";
import ImageThree from "@data/images/box-image/timeline-image-03.jpg";

const content = [
    {
        id: 1,
        year: "1988",
        images: [{ src: ImageOne }],
        title: "The Foundation of Mitech",
        description:
            "The beginning of Mitech Co. was laid by three men: Jackie Moodle, Alan Morray and Burrow Kills. Back in 1988, three passionate young pupils, whose major is Information Technology, had discussed with each other about starting a company to deliver technological & digital services in an old rented apartment.",
    },
    {
        id: 2,
        year: "1993",
        images: [{ src: ImageTwo }],
        title: "Mitech’s Golden Age",
        description:
            "Mitech had been operating for 5 years when it reached the golden age in the company’s history. They received two prestigious awards for Dedicated Services & Community Contribution (in 1990), plus three successive award nominations for Best IT Company of the year (respectively in 1991, 1992 & 1993).",
    },
    {
        id: 3,
        year: "1993",
        images: [{ src: ImageThree }],
        title: "Mitech’s Turning Point",
        description:
            "The company has a turning point in 1995 when one of its founders left the board of the management and established a new company in Healthcare & Assurance – HealSoul. Later on, Mitech and HealSoul have successfully cooperated in several projects to integrate technology into taking care of people’s health. .",
    },
];

const TimelineArea = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Timeline items={content} />
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default TimelineArea;
