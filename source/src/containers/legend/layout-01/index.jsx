import Heading from "@ui/heading";
import Text from "@ui/text";
import { Col, Container, Row } from "@ui/wrapper";
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from "react";
import { SectionWrap } from "./style";

const LegendArea = ({ title,data }) => {
    const { t } = useTranslation();
    return(
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12} mx="auto">
                        <Heading as="h6" mb="37px" textAlign="left">
                            {data!=null ? title:""}
                        </Heading>                       
                        <Text fontSize="18px" mb="20px">
                            {data}
                        </Text>
                        {/* <Text
                            fontSize="18px"
                            mb="20px"
                            dangerouslySetInnerHTML={{ __html:data }}
                        /> */}
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
);
};

export default LegendArea;
