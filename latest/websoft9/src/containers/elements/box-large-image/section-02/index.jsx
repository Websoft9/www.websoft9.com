import React from "react";
import Button from "@ui/button";
import SectionTitle from "@ui/section-title";
import { Container, Row, Col } from "@ui/wrapper";
import BoxImage from "@components/box-large-image/layout-02";
import { SectionWrap } from "./style";
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';

const BoxSection = ({data}) => {
    const { t } = useTranslation();
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            subtitle={data.title}
                            title={data.subtitle}
                        />
                    </Col>
                </Row>
                <Row>
                    {data.map((item) => {
                        return (
                            <Col
                                lg={4}
                                md={6}
                                className="box-item"
                                key={item.id}
                            >
                                <BoxImage
                                    image={item.image}
                                    title={item.title}
                                    category={item.category}
                                    desc={item.description}
                                    path={item.path}
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
