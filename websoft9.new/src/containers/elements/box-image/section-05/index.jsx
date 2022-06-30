import React from "react";
import SectionTitle from "@ui/section-title";
import BoxImage from "@components/box-image/layout-05";
import Motto from "@components/motto";
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
                            mb={["7px", null, "20px"]}
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
                                    desc={item.description}
                                    image={item.image}
                                    path="/"
                                />
                            </Col>
                        );
                    })}
                </Row>
                <Row>
                    <Col lg={12} mt={["30px", null, "50px", "80px"]}>
                        <Motto
                            text="Challenges are just opportunities in disguise."
                            linkText="Take the challenge!"
                            path="/"
                        />
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default BoxSection;
