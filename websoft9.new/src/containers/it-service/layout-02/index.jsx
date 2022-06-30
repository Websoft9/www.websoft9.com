import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import Button from "@ui/button";
import BoxIcon from "@components/box-icon/layout-02";
import { SectionTitleType, ButtonType, ItemType } from "@utils/types";
import { ServicesWrapper, SectionBottom } from "./style";

const ServiceArea = ({ data, ...rest }) => {
    return (
        <ServicesWrapper {...rest}>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        mb={["30px", null, "40px"]}
                        subtitle={data.section_title?.subtitle}
                        title={data.section_title?.title}
                    />
                )}
                {data?.items && (
                    <Row>
                        {data.items?.map((feature) => {
                            return (
                                <Col lg={4} md={6} key={feature.id}>
                                    <BoxIcon
                                        id={feature.id}
                                        title={feature.title}
                                        desc={feature.excerpt}
                                        icon={feature.icon?.svg?.src?.publicURL}
                                        path={`/it-service/${feature.slug}`}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                )}
                {data?.buttons && (
                    <SectionBottom>
                        {data.buttons?.map(({ id, content, ...restProps }) => (
                            <Button key={id} m="10px" {...restProps}>
                                {content}
                            </Button>
                        ))}
                    </SectionBottom>
                )}
            </Container>
        </ServicesWrapper>
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
