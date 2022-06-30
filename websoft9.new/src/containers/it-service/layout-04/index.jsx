import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import ServiceBox from "@components/box-icon/layout-01";
import { SectionTitleType, ItemType } from "@utils/types";
import { SectionWrap } from "./style";

const ServiceArea = ({ data }) => {
    return (
        <SectionWrap>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        mb={["20px", null, "30px"]}
                        title={data.section_title?.title}
                        subtitle={data.section_title?.subtitle}
                    />
                )}
                <Row>
                    {data?.items?.map((service) => (
                        <Col xl={3} lg={4} md={6} key={service.slug} mt="30px">
                            <ServiceBox
                                id={service.id}
                                icon={service.icon}
                                title={service.title}
                                desc={service.excerpt}
                                path={`/it-service/${service.slug}`}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </SectionWrap>
    );
};

ServiceArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default ServiceArea;
