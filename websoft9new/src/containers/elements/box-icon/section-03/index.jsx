import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import BoxIcon from "@components/box-icon/layout-03";
import { data } from "./data";
import { SectionWrap } from "./style";

const BoxIconSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    {data.map((item, i) => (
                        <Col md={6} key={`box-icon-3-${i}`}>
                            <BoxIcon
                                id={item.id}
                                title={item.title}
                                desc={item.description}
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
