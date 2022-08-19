import React from "react";
import Accordion from "@ui/accordion";
import Heading from "@ui/heading";
import { Container, Row, Col } from "@ui/wrapper";
import { SectionWrap } from "./style";
import { textAlign } from "styled-system";

const AccordionArea = ({data}) => (
    <SectionWrap>
        <Container>
            <Row>
                <Col lg={12} mx="auto">
                    {data?.headings && (
                        <Heading as="h4" mb="37px" textAlign="center">
                            {data.headings}
                        </Heading>
                    )}
                    {data?.features && <Accordion data={data.features} />}
                </Col>
            </Row>
        </Container>
    </SectionWrap>
);

export default AccordionArea;
