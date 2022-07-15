import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import FeatureBox from "@components/box-image/layout-01";
import Motto from "@components/motto";
import { SectionTitleType, ItemType, MottoType } from "@utils/types";
import { SectionWrap } from "./style";

const FeaturesArea = ({ data, ...rest }) => {
    return (
        <SectionWrap {...rest}>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        subtitle={data.section_title?.subtitle}
                        title={data.section_title?.title}
                    />
                )}
                {data?.items && (
                    <Row>
                        {data.items?.map((solution) => (
                            <Col
                                lg={4}
                                md={6}
                                key={solution.id}
                                mt={["47px", null, "60px"]}
                            >
                                <FeatureBox
                                    title={solution.title}
                                    image={solution.icon?.images?.[0]}
                                    desc={solution.excerpt}
                                    path={`/it-solution/${solution.slug}`}
                                />
                            </Col>
                        ))}
                    </Row>
                )}
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

FeaturesArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
        motto: PropTypes.shape(MottoType),
    }),
};

export default FeaturesArea;
