import Image from "@ui/image";
import SectionTitle from "@ui/section-title";
import { Col, Container, Row } from "@ui/wrapper";
import "markdown-navbar/dist/navbar.css";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { SectionWrap } from "./style";

const AboutArea = ({ data }) => {
    return (
        <SectionWrap>
            <Container>
                <SectionTitle mb={["47px", null, "60px"]} subtitle={data.texts} title={data.headings} />
                <Row>
                    <Col
                        lg={{ span: 4, offset: 1 }}
                        mb={["10px", null, null, 0]}
                    >
                        <Image src={data.features?.[0].image} alt=""/>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {data.features?.[0].description.description}
                        </ReactMarkdown>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};
export default AboutArea;
