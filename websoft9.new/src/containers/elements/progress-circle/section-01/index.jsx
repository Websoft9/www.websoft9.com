import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import ProgressCirle from "@ui/progress-circle/layout-01";
import {
    SectionWrap,
    FeatureListProgressWrap,
    ProgressCircleWrap,
    FeatureList,
} from "./style";

const ProgressCircleSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={6}>
                        <FeatureListProgressWrap position="left">
                            <ProgressCircleWrap>
                                <ProgressCirle value={75} />
                            </ProgressCircleWrap>
                            <FeatureList>
                                <h6>Digital Marketing</h6>
                                <ul>
                                    <li>Keyword rank tracking</li>
                                    <li>Website audit</li>
                                    <li>Marketing, SEO</li>
                                    <li>Social Media</li>
                                    <li>On-page SEO Audit</li>
                                </ul>
                            </FeatureList>
                        </FeatureListProgressWrap>
                    </Col>
                    <Col lg={6}>
                        <FeatureListProgressWrap>
                            <ProgressCircleWrap>
                                <ProgressCirle value={75} variant="secondary" />
                            </ProgressCircleWrap>
                            <FeatureList>
                                <h6>Web Design, UI/UX</h6>
                                <ul>
                                    <li>Branding &amp; Strategy</li>
                                    <li>Web Design &amp; Development</li>
                                    <li>Packaging Design</li>
                                    <li>Video &amp; Animation</li>
                                    <li>Navigation Effects</li>
                                </ul>
                            </FeatureList>
                        </FeatureListProgressWrap>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default ProgressCircleSection;
