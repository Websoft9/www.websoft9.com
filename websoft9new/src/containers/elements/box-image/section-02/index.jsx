import React from "react";
import SectionTitle from "@ui/section-title";
import { Container, Row, Col } from "@ui/wrapper";
import Motto from "@components/motto";
import BoxImage from "@components/box-image/layout-02";
import { data } from "./data";
import { SectionWrap } from "./style";
import {Trans, useTranslation } from 'gatsby-plugin-react-i18next';

const BoxSection = () => {
    const { t } = useTranslation();
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            subtitle=""
                            title={t("To make requests for further information, <br/><span>contact us</span> via our social channels.")}
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
                                    title={t(item.title)}
                                    path={t(item.path==null?"#":item.path)}
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
