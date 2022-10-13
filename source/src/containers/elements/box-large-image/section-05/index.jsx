import React from "react";
import SectionTitle from "@ui/section-title";
import { Container, Row, Col } from "@ui/wrapper";
import BoxImage from "@components/box-large-image/layout-02";
import { SectionWrap } from "./style";
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import defaultImage from "@assets/images/default.png";

const BoxSection = ({alldata}) => {
    const { t } = useTranslation();
    return (
        <SectionWrap>
            <Container>
                {
                    alldata?.map((data)=>{
                        return (
                            <React.Fragment key={data.id}>
                                {
                                    data?.title && 
                                    <Row id={data.key}>
                                        <SectionTitle  subtitle={data.overview} title={data.title} />
                                    </Row>
                                }
                                <Row>
                                    {data.service && data.service.map((feature,i) => {
                                        var image = new Object();
                                        image.src = feature.image == null ? defaultImage : feature.image;
                                        return (
                                            <Col
                                                lg={4}
                                                md={6}
                                                className="box-item"
                                                key={feature.id}
                                            >
                                                <BoxImage
                                                    image={image}
                                                    title={feature.texts}
                                                    //category={feature.catalog[0].title}
                                                    desc={feature.headings}
                                                    path={`/services/${feature.catalog[0].key}/${feature.key}`}
                                                />
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </React.Fragment>
                        );
                    })
                }
            </Container>
        </SectionWrap>
    );
};

export default BoxSection;
