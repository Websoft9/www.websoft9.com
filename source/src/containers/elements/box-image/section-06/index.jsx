import defaultImage from "@assets/images/default.png";
import BoxImage from "@components/box-image/layout-08";
import { Col, Container, Row } from "@ui/wrapper";
import React from "react";
import { SectionWrap } from "./style";

const BoxSection = ({ data, lgSize = 4 }) => {
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
                                    <a href={item.siteurl} target="_blank" rel="noopener noreferrer">
                                        <BoxImage
                                            title={item.name}
                                            image=
                                            {
                                                item.logo.imageurl == null ? { src: defaultImage } : { src: item.logo.imageurl }
                                            }
                                            desc={item.description}
                                        />
                                    </a>
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default BoxSection;
