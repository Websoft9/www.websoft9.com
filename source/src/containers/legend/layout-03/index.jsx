import Heading from "@ui/heading";
import { Col, Container, Row } from "@ui/wrapper";
import React from "react";
import { SectionWrap } from "./style";

const LegendArea = ({ title,data }) => {
    return(
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12} mx="auto">
                        <Heading as="h6" mb="37px" textAlign="left">
                            {data!=null ? title:""}
                        </Heading>
                        <ul>
                            {
                                data?.map((item)=>{
                                    return (
                                        <li key={item}>{item}</li>
                                    );
                                })
                            }
                        </ul>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
);
};

export default LegendArea;
