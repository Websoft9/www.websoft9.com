import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Heading from "@ui/heading";
import { Container, Row, Col } from "@ui/wrapper";
import { SectionWrap } from "./style";
import { textAlign } from "styled-system";
import {Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import Text from "@ui/text";
import Markdown from "markdown-to-jsx";

const LegendArea = ({ title,data }) => {
    return(
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12} mx="auto">
                        <Heading as="h6" mb="37px" textAlign="left">
                            {data!=null ? title:null}
                        </Heading>
                        
                       {data && <Markdown> {data} </Markdown>}

                    </Col>
                </Row>
            </Container>
        </SectionWrap>
);
};

export default LegendArea;
