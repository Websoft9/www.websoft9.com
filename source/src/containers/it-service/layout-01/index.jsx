import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import Button from "@ui/button";
import { SectionTitleType, ButtonType, ItemType } from "@utils/types";
import { ServicesWrapper, SectionBottom } from "./style";
import BoxImage from "@components/box-image/layout-07";

const ServiceArea = ({ data, ...rest }) => {
    const svgDir = require.context('@material-design-icons/svg/two-tone/');

    return (
        <ServicesWrapper {...rest}>
            <Container>
                {data && (
                    <Row>
                        {data?.map((feature,index) => {
                            const tmp = feature.key.split('/');
                            const svgFile = tmp[0] == ""? svgDir("./help.svg").default:svgDir("./"+tmp[0]+".svg").default;
                            return (
                                <Col lg={4} key={'col-item-'+index}>
                                    <BoxImage
                                        id={feature.id}
                                        icon={svgFile}
                                        title={tmp[1]}
                                        desc={feature.value}
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
