import defaultImage from "@assets/images/default.png";
import BoxImage from "@components/box-large-image/layout-02";
import SectionTitle from "@ui/section-title";
import { Col, Container, Row } from "@ui/wrapper";
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from "react";
import { SectionWrap } from "./style";

const BoxSection = ({data,...rest}) => {
    const { t } = useTranslation();
    return (
        <SectionWrap {...rest}>
            <Container>
                {
                    data?.texts && 
                    <Row>
                       <SectionTitle subtitle={data.texts} title={data.headings} />
                    </Row>
                }
                <Row>
                    {data?.features && data.features.map((feature,i) => {
                        var image = new Object();
                        image.src = feature.image == null ? defaultImage : feature.image ;
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
                                    category={feature.type.title}
                                    // desc={feature.subTitle}
                                    desc={feature.type.key == "blog" || feature.type.key == "news" ?feature.time:null }
                                    path={`/${feature.type.key}/${feature.slug}`}
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
