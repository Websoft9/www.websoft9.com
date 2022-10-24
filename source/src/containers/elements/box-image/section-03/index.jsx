import defaultImage from "@assets/images/default.png";
import BoxImage from "@components/box-image/layout-03";
import SectionTitle from "@ui/section-title";
import { Col, Container, Row } from "@ui/wrapper";
import React from "react";
import { SectionWrap } from "./style";


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
