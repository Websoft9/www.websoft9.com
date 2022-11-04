import BoxImage from "@components/box-image/layout-08";
import { Col, Container, Row } from "@ui/wrapper";
import React from "react";
import { ServicesWrapper } from "./style";

const ServiceArea = ({ data, ...rest }) => {
    const svgDir = require.context('@material-design-icons/svg/two-tone/');

    return (
        <ServicesWrapper {...rest}>
            <Container>
                {data && (
                    <Row>
                        {data?.map((feature,index) => {
                            return (
                                <Col lg={4} key={'col-item-'+index}>
                                    <BoxImage
                                        title={feature.trademark}
                                        image={{src: feature.image.imageurl}}
                                        desc={feature.description}
                                        path={`/apps/${feature.key}`}
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


export default ServiceArea;
