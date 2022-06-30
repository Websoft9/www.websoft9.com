import React from "react";
import Accordion from "@ui/accordion";
import Heading from "@ui/heading";
import { Container, Row, Col } from "@ui/wrapper";
import { SectionWrap } from "./style";
import { data } from "./data";

const AccordionArea = () => (
    <SectionWrap>
        <Container>
            <Row>
                <Col lg={8} mx="auto">
                    {data?.title && (
                        <Heading as="h4" mb="14px">
                            {data.title}
                        </Heading>
                    )}
                    {data?.items && <Accordion data={data.items} layout={2} />}
                </Col>
            </Row>
        </Container>
    </SectionWrap>
);

export default AccordionArea;
