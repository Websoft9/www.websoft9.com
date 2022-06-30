import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Dot from "@ui/divider/dot";
import { SectionWrap } from "./style";

const DividerSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Heading as="h6" mb="15px">
                            Modern Dots
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
                        <Dot mt="40px" />
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default DividerSection;
