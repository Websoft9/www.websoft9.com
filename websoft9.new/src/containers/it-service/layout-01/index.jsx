import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import ServiceBox from "@components/box-large-image/layout-01";
import MottoText from "@components/motto";
import { SectionTitleType, MottoType, ItemType } from "@utils/types";
import { SectionWrap } from "./style";

const ServiceArea = ({ data, space }) => {
    return (
        <SectionWrap $space={space}>
            <Container px={[null, null, null, null, "35px"]}>
                {data?.section_title && (
                    <SectionTitle
                        title={data.section_title?.title}
                        subtitle={data.section_title?.subtitle}
                    />
                )}
                {data?.items && (
                    <Row gutters={{ xl: 70 }}>
                        {data.items?.map((service) => (
                            <Col
                                lg={4}
                                md={6}
                                className="box-item"
                                key={service.id}
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
                {data?.motto && (
                    <MottoText
                        mt={["42px", null, "56px"]}
                        text={data.motto?.text}
                        linkText={data.motto?.linkText}
                        path={data.motto?.link}
                    />
                )}
            </Container>
        </SectionWrap>
    );
};

ServiceArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
        motto: PropTypes.shape(MottoType),
    }),
    space: PropTypes.oneOf([1, 2]),
};

ServiceArea.defaultProps = {
    space: 1,
};

export default ServiceArea;
