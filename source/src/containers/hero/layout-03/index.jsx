import Image from "@ui/image";
import { Col, Container, Row } from "@ui/wrapper";
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from "react";
import {
    Heading, HeroTextBox, HeroWrapper
} from "./style";
import "/node_modules/video-react/dist/video-react.css";

const HeroArea = ({ data }) => {
    const { t } = useTranslation()

    return (
        <HeroWrapper>
            <Container fluid>
                <Row alignItems="center">
                        { data?.subtitle && <Heading>{data.subtitle}</Heading> }
                </Row>
                <Row alignItems="center">
                    <Col md={9}>
                        <HeroTextBox>                                                        
                            { data?.image && <Image src={data.image} alt=""/> }
                        </HeroTextBox>
                    </Col>
                </Row>
            </Container>
        </HeroWrapper>
    );
};

export default HeroArea;
