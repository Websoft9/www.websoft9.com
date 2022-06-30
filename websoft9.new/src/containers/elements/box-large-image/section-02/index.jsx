import React from "react";
import Button from "@ui/button";
import SectionTitle from "@ui/section-title";
import { Container, Row, Col } from "@ui/wrapper";
import BoxImage from "@components/box-large-image/layout-02";
import { data } from "./data";
import { SectionWrap } from "./style";

const BoxSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            subtitle="OPTIMAL IT MANAGEMENT SOLUTIONS"
                            title="We run all kinds of IT services <br/> that vow your <span>success</span>"
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
                <Row mt="40px" textAlign="center">
                    <Col lg={12}>
                        <Button m="10px">Learn More</Button>
                        <Button m="10px" $varient="outlined">
                            Contact Us
                        </Button>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default BoxSection;
