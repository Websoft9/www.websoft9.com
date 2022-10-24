import BoxImage from "@components/box-image/layout-05";
import SectionTitle from "@ui/section-title";
import { Col, Container, Row } from "@ui/wrapper";
import React from "react";
import { SectionWrap } from "./style";

const BoxSection = ({data}) => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle mb={["47px", null, "60px"]} subtitle={data.texts} title={data.headings} />
                    </Col>
                </Row>
                <Row>
                    {data?.features?.map((item) => {
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
