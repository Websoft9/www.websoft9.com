import Heading from "@ui/heading";
import { Col, Container, Row } from "@ui/wrapper";
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { MarkdownStyle, SectionWrap, StyledAccordion } from "./style";

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
