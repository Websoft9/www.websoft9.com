import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import Text from "@ui/text";
import Button from "@ui/button";
import Image from "@ui/image";
import { HeadingType, TextType, ButtonType, ImageType } from "@utils/types";
import {
    HeroWrapper,
    HeroTextBox,
    ImageBoxWrap,
    ImageBoxOne,
    ImageBoxTwo,
    StyledTitle,
    StyledSubtitle,
    ReadMoreBtn,
} from "./style";
import { Trans,useTranslation } from 'gatsby-plugin-react-i18next';

const HeroArea = ({ data }) => {
    const { t } = useTranslation()
    return (
        <HeroWrapper>
            <Container fluid>
                <Row alignItems="center">
                    <Col md={6}>
                    <HeroTextBox>
                            {data?.title && (
                                <StyledSubtitle as="h3">
                                    {data.title}
                                </StyledSubtitle>
                            )}
                            {data?.subtitle && (
                                <Text>{data.subtitle}</Text>
                            )}
                            {
                                data.link &&                            
                                <ReadMoreBtn>
                                    <Button
                                        icon="far fa-long-arrow-right"
                                        path={data.link[0].value}
                                        variant="texted"
                                        icondistance="4px"
                                        fontWeight={500}
                                    >
                                        {data.link[0].key}
                                    </Button>
                                </ReadMoreBtn>
                            }
                        </HeroTextBox>
                    </Col>
                    <Col md={5}>
                        <ImageBoxWrap>
                            {data?.image && (
                                <ImageBoxTwo>
                                    <Image src={data.image} />
                                </ImageBoxTwo>
                            )}
                        </ImageBoxWrap>
                    </Col>
                </Row>
            </Container>
        </HeroWrapper>
    );
};

export default HeroArea;
