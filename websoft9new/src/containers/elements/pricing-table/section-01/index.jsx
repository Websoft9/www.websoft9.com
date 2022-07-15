import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import PricingTable from "@components/pricing-table/layout-01";
import SectionTitle from "@ui/section-title";
import { data } from "./data";
import { SectionWrap } from "./style";
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';

const PricingTableSection = () => {
    const { t } = useTranslation();
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            mb="45px"
                            title={t("Payment on demand, free Enterprise Support for <br/><span>your business</span>")}
                            subtitle={t("PRICING AND PLAN")}
                        />
                    </Col>
                </Row>
                <Row alignitems="center">
                    {data.map((pricing) => (
                        <Col lg={4} md={6} key={pricing.id}>
                            <PricingTable
                                title={t(pricing.title)}
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
