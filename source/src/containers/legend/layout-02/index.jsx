import Heading from "@ui/heading";
import Text from "@ui/text";
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

                       {/* {data!=null && <Markdown> {data} </Markdown>} */}

                       {data!=null && 
                        <Text
                            fontSize="18px"
                            mb="20px"
                            dangerouslySetInnerHTML={{ __html:data }}
                        />
                        }
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
);
};

export default LegendArea;
