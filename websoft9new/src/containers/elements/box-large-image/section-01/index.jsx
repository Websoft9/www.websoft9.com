import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import BoxLargeImage from "@components/box-large-image/layout-01";
import MottoText from "@components/motto";
import { data } from "./data";
import { SectionWrap, StyledAnchor } from "./style";

const BoxSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            mb={["17px", null, null, "30px"]}
                            subtitle="HIRE US, WHY NOT?"
                            title="What make us <span>special?</span>"
                        />
                    </Col>
                </Row>
                <Row className="gutter-xl-70">
                    {data.map((item) => {
                        return (
                            <Col
                                lg={4}
                                md={6}
                                className="box-item"
                                key={item.id}
                            >
                                <BoxLargeImage
                                    title={item.title}
                                    desc={item.description}
                                    image={item.image}
                                />
                            </Col>
                        );
                    })}
                </Row>
                <Row>
                    <Col lg={12} mt="40px" textAlign="center">
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
