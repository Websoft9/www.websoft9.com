import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import CaseStudyBox from "@components/box-large-image/layout-02";
import { SectionTitleType, ItemType } from "@utils/types";
import { CaseStudyWrapper } from "./style";

const CaseStudyArea = ({ data }) => {
    return (
        <CaseStudyWrapper>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        mb={["46px", null, "60px"]}
                        title={data.section_title?.title}
                        subtitle={data.section_title?.subtitle}
                    />
                )}

                {data?.items && (
                    <Row>
                        {data?.items?.map((caseStudy) => (
                            <Col lg={4} md={6} mb="30px" key={caseStudy.id}>
                                <CaseStudyBox
                                    image={caseStudy.featured_image}
                                    title={caseStudy.title}
                                    category={caseStudy.category}
                                    desc={caseStudy.excerpt}
                                    path={`/case-study/${caseStudy.slug}`}
                                    btnText="View case study"
                                    layout={2}
                                />
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </CaseStudyWrapper>
    );
};

CaseStudyArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default CaseStudyArea;
