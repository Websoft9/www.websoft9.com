import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "@ui/progress-bar/layout-01";
import { Container, Row, Col } from "@ui/wrapper";
import MarkHeading from "@components/mark-heading";
import SectionTitle from "@ui/section-title";
import { SectionTitleType, ItemType, HeadingType } from "@utils/types";
import { SectionWrap, StyledLeftHeading } from "./style";

const AboutArea = ({ data }) => {
    return (
        <SectionWrap>
            <Container>
                {data?.section_title && (
                    <SectionTitle mb="45px" {...data.section_title} />
                )}

                <Row>
                    <Col
                        lg={{ span: 4, offset: 1 }}
                        mb={["30px", null, null, 0]}
                    >
                        {data?.headings?.[0] && (
                            <MarkHeading
                                mb="24px"
                                maxWidth={["100%", null, null, "330px"]}
                                as={data.headings[0]?.level}
                            >
                                {data.headings[0]?.content}
                            </MarkHeading>
                        )}
                        {data?.headings?.[1] && (
                            <StyledLeftHeading
                                as={data.headings[1]?.level}
                                dangerouslySetInnerHTML={{
                                    __html: data.headings[1]?.content,
                                }}
                            />
                        )}
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                        {data?.items?.map((skill) => (
                            <ProgressBar
                                key={skill.id}
                                title={skill.title}
                                value={skill.value}
                            />
                        ))}
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

AboutArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default AboutArea;
