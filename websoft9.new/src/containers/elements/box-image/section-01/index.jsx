import React from "react";
import SectionTitle from "@ui/section-title";
import { Container, Row, Col } from "@ui/wrapper";
import BoxImage from "@components/box-image/layout-01";
import Motto from "@components/motto";
import { data } from "./data";
import { SectionWrap } from "./style";

const BoxSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col xl={12}>
                        <SectionTitle
                            mb={["47px", null, null, "60px"]}
                            subtitle="OUR SERVICES"
                            title="For your very specific industry, <br/> we have <span>highly-tailored IT solutions.</span>"
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
                                    image={item.image}
                                    desc={item.description}
                                />
                            </Col>
                        );
                    })}
                </Row>
                <Row>
                    <Col lg={12} mt="10px">
                        <Motto
                            text="Challenges are just opportunities in disguise."
                            linkText="Take the challenge!"
                        />
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default BoxSection;
