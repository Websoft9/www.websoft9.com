import defaultImage from "@assets/images/default.png";
import BoxImage from "@components/box-image/layout-01";
import { Col, Container, Row } from "@ui/wrapper";
import React from "react";
import { SectionWrap } from "./style";


const BoxSection = ({data}) => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    {
                    data.map((item) => {
                        return (
                            <Col
                                lg={4}
                                md={4}
                                className="box-item"
                                key={item.id}
                            >
                                <BoxImage
                                    title={item.title}
                                    image=
                                    {                                         
                                         item.image==null ? {src: defaultImage} : {src: item.image.imageurl}
                                    }
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
