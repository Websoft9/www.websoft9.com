import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import Anchor from "@ui/anchor";
import Image from "@ui/image";
import { SectionTitleType, ItemType } from "@utils/types";
import {
    SectionWrap,
    CaseInfo,
    CaseTitle,
    CaseCat,
    CaseText,
    CaseImage,
} from "./style";

const sliderSettings = {
    slidesPerView: 1,
};

const CaseStudyArea = ({ data }) => {
    return (
        <SectionWrap>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        mb={["47px", null, "60px"]}
                        title={data.section_title?.title}
                        subtitle={data.section_title?.subtitle}
                    />
                )}

                {data?.items && (
                    <SwiperSlider options={sliderSettings}>
                        {data.items?.map((caseStudy) => (
                            <SwiperSlide className="item" key={caseStudy.id}>
                                <Row>
                                    <Col
                                        lg={{ span: 6, order: 1 }}
                                        xs={{ span: 12, order: 2 }}
                                    >
                                        <CaseInfo>
                                            {caseStudy.title && (
                                                <CaseTitle>
                                                    <Anchor
                                                        to={`/case-study/${caseStudy.slug}`}
                                                    >
                                                        {caseStudy.title}
                                                    </Anchor>
                                                </CaseTitle>
                                            )}
                                            {caseStudy.category && (
                                                <CaseCat>
                                                    {caseStudy.category}
                                                </CaseCat>
                                            )}
                                            {caseStudy.excerpt && (
                                                <CaseText>
                                                    {caseStudy.excerpt}
                                                </CaseText>
                                            )}
                                        </CaseInfo>
                                    </Col>
                                    <Col
                                        lg={{ span: 6, order: 2 }}
                                        xs={{ span: 12, order: 1 }}
                                    >
                                        <CaseImage>
                                            {caseStudy?.slide_image?.src && (
                                                <Image
                                                    src={
                                                        caseStudy.slide_image
                                                            .src
                                                    }
                                                    alt={
                                                        caseStudy.slide_image
                                                            ?.alt ||
                                                        caseStudy.title
                                                    }
                                                />
                                            )}
                                        </CaseImage>
                                    </Col>
                                </Row>
                            </SwiperSlide>
                        ))}
                    </SwiperSlider>
                )}
            </Container>
        </SectionWrap>
    );
};

CaseStudyArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default CaseStudyArea;
