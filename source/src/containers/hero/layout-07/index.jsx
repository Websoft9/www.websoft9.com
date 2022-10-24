import Image from "@ui/image";
import Text from "@ui/text";
import { Col, Container, Row } from "@ui/wrapper";
import cn from "clsx";
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from "react";
import {
    HeroTextBox, HeroWrapper, ImageBoxWrap, StyledSubtitle
} from "./style";

const HeroArea = ({ data,className }) => {
    const { t } = useTranslation()
    return (
        <HeroWrapper>
            <Container fluid>
                <Row alignItems="center">
                    <Col md={6}>
                    <HeroTextBox>
                            {data?.catalogTitle && (
                                <Text style={{color:"dodgerblue"}}>{data.catalogTitle}</Text>
                            )}
                            {data?.headings && (
                                <StyledSubtitle as="h3">
                                    {data.headings}
                                </StyledSubtitle>
                            )}                   
                            {data?.texts && (
                                <Text>{data.texts}</Text>
                            )}                          
                    </HeroTextBox>
                    </Col>
                    <Col md={5}>
                        <ImageBoxWrap className={cn(className, "popup-video")}>
                            {data?.media && (
                                <Image src={data.media} alt=""/>
                            )}
                        </ImageBoxWrap>
                    </Col>
                </Row>
            </Container>
        </HeroWrapper>
    );
};

export default HeroArea;
