import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Line from "@ui/divider/line";
import { SectionWrap } from "./style";

const DividerSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Heading as="h6" mb="15px">
                            Thick Line
                        </Heading>
                        <Text>
                            Aeroland presents your services with flexible,
                            convenient and multipurpose layouts. You can select
                            your favorite layouts &amp; elements for particular
                            projects with unlimited customization possibilities.
                            Pixel-perfect replication of the designers is
                            intended for both front-end &amp; back-end
                            developers to build their pages with greater comfort
                            thanks to the higher customizability, adaptability
                            as well as flexibility.
                        </Text>
                        <Line mt="40px" mb="40px" borderWidth="2px" />
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default DividerSection;
