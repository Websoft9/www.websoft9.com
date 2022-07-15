import React from "react";
import SectionTitle from "@ui/section-title";
import { Container, Row, Col } from "@ui/wrapper";
import BoxLargeImage from "@components/box-large-image/layout-03";
import MottoText from "@components/motto";
import { data } from "./data";
import { SectionWrap } from "./style";

const BoxSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            mb={["10px", null, null, "20px"]}
                            subtitle="HIRE US, WHY NOT?"
                            title="What make us <span>excel?</span>"
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
                                <BoxLargeImage
                                    image={item.image}
                                    title={item.title}
                                    desc={item.description}
                                    path={item.path}
                                />
                            </Col>
                        );
                    })}
                </Row>
                <Row mt="40px" textAlign="center">
                    <Col lg={12}>
                        <MottoText
                            linkText="Learn more about how we work"
                            path="/"
                        />
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default BoxSection;
