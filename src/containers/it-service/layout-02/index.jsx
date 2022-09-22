import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import Button from "@ui/button";
import BoxIcon from "@components/box-icon/layout-02";
import { SectionTitleType, ButtonType, ItemType } from "@utils/types";
import { ServicesWrapper, SectionBottom } from "./style";
//import EventSvg from '@material-design-icons/svg/two-tone/event.svg'

const ServiceArea = ({ data, ...rest }) => {
    const svgDir = require.context('@material-design-icons/svg/two-tone/');

    return (
        <ServicesWrapper {...rest}>
            <Container>
                <SectionTitle
                        mb={["30px", null, "40px"]}
                        subtitle={data.texts}
                        title={data.headings}
                />
                {data?.features && (
                    <Row>
                        {data.features?.map((feature) => {
                            const svgFile = svgDir("./"+feature.icon+".svg").default;
                            return (
                                <Col lg={4} md={6} key={feature.id}>
                                    <BoxIcon
                                        id={feature.id}
                                        title={feature.title}
                                        desc={feature.subtitle}
                                        icon={svgFile}
                                        // path={`/it-service/${feature.slug}`}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                )}
            </Container>
        </ServicesWrapper>
    );
};

// ServiceArea.propTypes = {
//     data: PropTypes.shape({
//         section_title: PropTypes.shape(SectionTitleType),
//         buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
//         items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
//     }),
// };

export default ServiceArea;
