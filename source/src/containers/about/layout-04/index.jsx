import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Button from "@ui/button";
import SectionTitle from "@ui/section-title";
import {
    SectionTitleType,
    ButtonType,
    TextType,
    HeadingType,
} from "@utils/types";
import { SectionWrap,StyledLeftHeading } from "./style";
import Image from "@ui/image";

const AboutArea = ({ data }) => {
    return (
        <SectionWrap>
            <Container>
                <SectionTitle mb={["47px", null, "60px"]} subtitle={data.texts} title={data.headings} />
                <Row>
                    <Col
                        lg={{ span: 4, offset: 1 }}
                        mb={["10px", null, null, 0]}
                    >
                        <Image src={data.features?.[0].image} />
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>                     
                            <Text fontSize="18px" mb="20px">
                                {data.features?.[0].description.description}
                            </Text>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};
export default AboutArea;
