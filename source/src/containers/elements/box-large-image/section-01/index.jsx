import React from "react";
import Button from "@ui/button";
import SectionTitle from "@ui/section-title";
import { Container, Row, Col } from "@ui/wrapper";
import BoxImage from "@components/box-large-image/layout-02";
import { SectionWrap } from "./style";
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import defaultImage from "@assets/images/default.png";

const BoxSection = ({dataTitle,data}) => {
    const { t } = useTranslation();
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            subtitle={dataTitle.texts}
                            title={dataTitle.headings}
                        />
                    </Col>
                </Row>
                <Row>
                    {data && data.map((feature,i) => {
                        var image = new Object();
                        image.src = feature.featureImage;
                        return (
                            <Col
                                lg={4}
                                md={6}
                                className="box-item"
                                key={feature.id+i}
                            >
                                <BoxImage
                                    image={image}
                                    title={feature.title}
                                    desc={feature.subTitle}
                                    path={`resource-center/${feature.type.key}/${feature.slug}`}
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
