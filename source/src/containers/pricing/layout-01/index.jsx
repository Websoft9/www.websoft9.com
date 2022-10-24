import PricingTable from "@components/pricing-table/layout-01";
import SectionTitle from "@ui/section-title";
import { Col, Container, Row } from "@ui/wrapper";
import { ItemType, SectionTitleType } from "@utils/types";
import PropTypes from "prop-types";
import React from "react";
import { SectionWrap } from "./style";

const PricingArea = ({ data }) => {
    return (
        <SectionWrap>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        mb={["47px", null, "60px"]}
                        subtitle={data.section_title?.subtitle}
                        title={data.section_title?.title}
                    />
                )}
                {data?.items && (
                    <Row alignItems="center">
                        {data.items?.map((pricing) => (
                            <Col lg={4} md={6} key={pricing.id}>
                                <PricingTable
                                    period={pricing.period}
                                    title={pricing.title}
                                    price={pricing.price}
                                    path={pricing.path}
                                    features={pricing.list}
                                    image={pricing.images?.[0]}
                                    isFeatured={pricing.is_featured}
                                />
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </SectionWrap>
    );
};

PricingArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default PricingArea;
