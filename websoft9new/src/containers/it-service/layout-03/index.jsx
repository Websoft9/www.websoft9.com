import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import Button from "@ui/button";
import ServiceBox from "@components/box-large-image/layout-01";
import { SectionTitleType, ButtonType, ItemType } from "@utils/types";
import { SectionWrap, SectionBottom } from "./style";

const ServiceArea = ({ data }) => {
    return (
        <SectionWrap>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        title={data.section_title?.title}
                        subtitle={data.section_title?.subtitle}
                    />
                )}
                {data?.items && (
                    <Row>
                        {data.items?.map((service) => (
                            <Col
                                lg={4}
                                md={6}
                                className="box-item"
                                key={service.slug}
                            >
                                <ServiceBox
                                    title={service.title}
                                    desc={service.excerpt}
                                    image={service.featured_image}
                                    path={`/it-service/${service.slug}`}
                                />
                            </Col>
                        ))}
                    </Row>
                )}
                <SectionBottom>
                    {data?.buttons?.map(({ id, path, content, ...rest }) => (
                        <Button key={id} path={path} m="10px" {...rest}>
                            {content}
                        </Button>
                    ))}
                </SectionBottom>
            </Container>
        </SectionWrap>
    );
};

ServiceArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default ServiceArea;
