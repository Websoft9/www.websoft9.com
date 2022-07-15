import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import PricingTable from "@components/pricing-table/layout-01";
import SectionTitle from "@ui/section-title";
import { data } from "./data";
import { SectionWrap } from "./style";

const PricingTableSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            mb="45px"
                            title="1 monthly fee for <span>all IT services.</span>"
                            subtitle="PRICING AND PLAN"
                        />
                    </Col>
                </Row>
                <Row alignitems="center">
                    {data.map((pricing) => (
                        <Col lg={4} md={6} key={pricing.id}>
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
