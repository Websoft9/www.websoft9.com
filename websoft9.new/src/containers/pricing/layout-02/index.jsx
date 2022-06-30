import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import { normalizedArray } from "@utils";
import SectionTitle from "@ui/section-title";
import Tabs, { Tab } from "@ui/tabs";
import PricingTable from "@components/pricing-table/layout-01";
import { SectionTitleType, ItemType } from "@utils/types";
import { SectionWrap } from "./style";

const PricingArea = ({ data }) => {
    let content = normalizedArray(data.items, "period");
    const keys = Object.keys(content);

    return (
        <SectionWrap>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        mb={["30px", null, "50px"]}
                        {...data.section_title}
                    />
                )}
                <Tabs defaultActiveKey={keys[0]} layout={2}>
                    {keys.map((key) => (
                        <Tab
                            key={key}
                            eventKey={key}
                            title={key === "monthly" ? "Per Month" : "Per Year"}
                        >
                            <Row mt="50px">
                                {content[key].map((pricing) => (
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
                        </Tab>
                    ))}
                </Tabs>
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
