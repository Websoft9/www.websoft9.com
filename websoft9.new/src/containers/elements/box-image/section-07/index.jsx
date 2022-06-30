import React from "react";
import SectionTitle from "@ui/section-title";
import BoxImage from "@components/box-image/layout-07";
import { Container, Row, Col } from "@ui/wrapper";
import { data } from "./data";
import { SectionWrap } from "./style";

const BoxSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            mb="10px"
                            subtitle="MORE FEATURES"
                            title="<span>Richness</span> of Theme Features"
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
                                    desc={item.description}
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
