import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import PricingTable from "@components/pricing-table/layout-02";
import { data } from "./data";
import { SectionWrap } from "./style";

const PricingTableSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            mb="50px"
                            title="Great price plan <span>for you!</span>"
                            subtitle="PRICING AND PLAN"
                        />
                    </Col>
                </Row>
                <Row>
                    {data.map((pricing) => (
                        <Col md={6} xl={3} key={pricing.id}>
                            <PricingTable
                                title={pricing.title}
                                image={pricing.image}
                                price={pricing.price}
                                path={pricing.path}
                                features={pricing.features}
                                isFeatured={pricing.is_featured}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default PricingTableSection;
