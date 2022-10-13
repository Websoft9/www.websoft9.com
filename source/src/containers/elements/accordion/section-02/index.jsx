import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Heading from "@ui/heading";
import { Container, Row, Col } from "@ui/wrapper";
import { SectionWrap,StyledAccordion,MarkdownStyle } from "./style";
import { textAlign } from "styled-system";
import {Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

// const { t } = useTranslation();

const AccordionArea = ({ data }) => {
    const { t } = useTranslation();
    return(
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12} mx="auto">
                        <Heading as="h6" mb="37px" textAlign="left">
                            {data!=null ? t("FAQ"):null}
                        </Heading>                

                        <StyledAccordion layout={1}>
                            <Accordion defaultActiveKey={data!=null ? data[0]?.id:null}>
                                {data?.map((item) => (
                                    <Accordion.Item key={item.id} eventKey={item.id}>
                                        <Accordion.Header>{item.key}</Accordion.Header>
                                        <Accordion.Body>
                                            {/* <pre dangerouslySetInnerHTML={{ __html: item.value }} 
                                            style={{fontFamily:'CerebriSans',fontSize:'15px',whiteSpace:'pre-wrap',wordWrap:"break-word"}}></pre> */}
                                            <MarkdownStyle>
                                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                    {item.value}
                                                </ReactMarkdown>
                                            </MarkdownStyle>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </StyledAccordion>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
);
};

export default AccordionArea;
