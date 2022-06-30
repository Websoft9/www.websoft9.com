import React from "react";
import BoxImage from "@components/box-image/layout-03";
import { Container, Row, Col } from "@ui/wrapper";
import { data } from "./data";
import { SectionWrap } from "./style";

const BoxSection = () => {
    return (
        <SectionWrap>
            <Container fluid px={0}>
                <Row noGutter>
                    {data.map((item) => {
                        return (
                            <Col
                                lg={3}
                                md={6}
                                className="box-item"
                                key={item.id}
                            >
                                <BoxImage
                                    image={item.image}
                                    title={item.title}
                                    desc={item.description}
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
