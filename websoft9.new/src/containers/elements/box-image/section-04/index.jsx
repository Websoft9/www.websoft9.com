import React from "react";
import SectionTitle from "@ui/section-title";
import BoxImage from "@components/box-image/layout-04";
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
                            mb={["17px", null, null, "30px"]}
                            title="Affordable IT Support for <span>Businesses</span>"
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
                                    title={item.title}
                                    desc={item.description}
                                    image={item.image}
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
