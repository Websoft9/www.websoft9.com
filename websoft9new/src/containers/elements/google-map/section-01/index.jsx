import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import GoogleMap from "@ui/google-map";
import { SectionWrap } from "./style";

const GoogleMapSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={6} className="map-one">
                        <Heading as="h3" mb="40px" textAlign="center">
                            Default Style
                        </Heading>
                        <GoogleMap />
                    </Col>
                    <Col lg={6}>
                        <Heading as="h3" mb="40px" textAlign="center">
                            Custom Marker
                        </Heading>
                        <GoogleMap marker="animated" />
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default GoogleMapSection;
