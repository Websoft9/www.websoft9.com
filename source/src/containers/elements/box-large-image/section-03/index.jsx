import defaultImage from "@assets/images/default.png";
import BoxImage from "@components/box-large-image/layout-02";
import { Col, Container, Row } from "@ui/wrapper";
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from "react";
import { SectionWrap } from "./style";

const BoxSection = ({data}) => {
    const { t } = useTranslation();
    return (
        <SectionWrap>
            <Container>
                <Row>
                    {data.features && data.features.map((feature,i) => {
                        var image = new Object();
                        image.src = feature.image == null ? defaultImage : feature.image ;
                        return (
                            <Col
                                lg={4}
                                md={6}
                                className="box-item"
                                key={feature.id}
                            >
                                <BoxImage
                                    image={image}
                                    title={feature.title}
                                    desc={feature.subTitle}
                                    path="/"
                                />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default BoxSection;
