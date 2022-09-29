import React from "react";
import SectionTitle from "@ui/section-title";
import { Container, Row, Col } from "@ui/wrapper";
import BoxImage from "@components/box-image/layout-03";
import { SectionWrap } from "./style";
import { graphql } from "gatsby";
import defaultImage from "@assets/images/default.png";


const BoxSection = ({data,lgSize=4}) => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    {
                    data?.map((item) => {
                        return (
                            <Col
                                lg={lgSize}
                                md={3}
                                className="box-item"
                                key={item.id}
                            >
                                <BoxImage
                                    title={item.name}
                                    image=
                                    {
                                         item.logo.imageurl==null ? {src: defaultImage} : {src: item.logo.imageurl}
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
