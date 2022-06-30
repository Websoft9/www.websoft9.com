import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import BoxIcon from "@components/box-icon/layout-01";
import { data } from "./data";
import { SectionWrap } from "./style";

const BoxIconSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            mb="40px"
                            title="For your very specific industry, <br/> we have <span>highly-tailored IT solutions.</span>"
                            subtitle="INDUSTRIES WE SERVE"
                        />
                    </Col>
                </Row>
                <Row>
                    {data.map((item, i) => (
                        <Col lg={3} md={6} key={`box-icon-1-${i}`} mt="30px">
                            <BoxIcon
                                id={item.id}
                                title={item.title}
                                desc={item.description}
                                path={item.path}
                                icon={item.icon}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default BoxIconSection;
