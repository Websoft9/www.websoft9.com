import React from "react";
import Button from "@ui/button";
import SectionTitle from "@ui/section-title";
import { Container, Row, Col } from "@ui/wrapper";
import BoxImage from "@components/box-large-image/layout-02";
import { SectionWrap } from "./style";
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import defaultImage from "@assets/images/default.png";

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
