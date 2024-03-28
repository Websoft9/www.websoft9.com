import BoxImage from "@components/box-image/layout-09";
import SectionTitle from "@ui/section-title";
import { Col, Container, Row } from "@ui/wrapper";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { MarkdownStyle, SectionWrap } from "./style";

const BoxSection = ({ data, lgSize = 4 }) => {
    const svgDir = require.context('@material-design-icons/svg/two-tone/');
    return (
        <SectionWrap>
            <Container>
                <SectionTitle mb={["47px", null, "60px"]} subtitle={data.texts} title={data.headings} />
                <Row>
                    {
                        data.features?.map((item, i) => {
                            const svgFile = svgDir("./" + item.icon + ".svg").default;
                            return (
                                <Col
                                    lg={lgSize}
                                    md={3}
                                    className="box-item"
                                    key={item.id + i}
                                >
                                    <BoxImage
                                        title={item.title}
                                        icon={svgFile}
                                        desc={
                                            <MarkdownStyle>
                                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                    {item.description?.description || " "}
                                                </ReactMarkdown>
                                            </MarkdownStyle>
                                        }
                                        links={item.link}
                                    />
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default BoxSection;
