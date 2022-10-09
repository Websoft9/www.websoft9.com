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
                <SectionTitle mb={["47px", null, "60px"]} subtitle={data.texts} title={data.headings} />

                <Row>
                    {
                    data.features?.map((item,i) => {
                        return (
                            <Col
                                lg={lgSize}
                                md={3}
                                className="box-item"
                                key={item.id+i}
                            >
                                <BoxImage
                                    title={item.title}
                                    image=
                                    {
                                         item.image==null ? {src: defaultImage} : {src: item.image}
                                    }
                                    desc={item.subtitle==null?" ":item.subtitle}
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
