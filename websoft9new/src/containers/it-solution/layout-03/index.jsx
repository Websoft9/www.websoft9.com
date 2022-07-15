import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import ITSolutionBox from "@components/box-image/layout-02";
import Motto from "@components/motto";
import { ItemType, SectionTitleType, MottoType } from "@utils/types";
import { SectionWrap } from "./style";

const FeatureArea = ({ data }) => {
    return (
        <SectionWrap>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        title={data.section_title?.title}
                        subtitle={data.section_title?.subtitle}
                    />
                )}
                <Row>
                    {data?.items?.map((item) => (
                        <Col
                            lg={4}
                            md={6}
                            key={item.slug}
                            mt={["47px", null, "60px"]}
                        >
                            <ITSolutionBox
                                image={item?.icon?.images[0]}
                                title={item.title}
                                path={`/it-solution/${item.slug}`}
                            />
                        </Col>
                    ))}
                </Row>
                {data?.motto && (
                    <Motto
                        mt={["45px", null, "60px"]}
                        text={data.motto?.text}
                        linkText={data.motto?.linkText}
                        path={data.motto?.link}
                    />
                )}
            </Container>
        </SectionWrap>
    );
};

FeatureArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
        motto: PropTypes.shape(MottoType),
    }),
};

export default FeatureArea;
