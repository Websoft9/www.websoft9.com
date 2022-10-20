import React from "react";
import PropTypes from "prop-types";
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
    MarkdownStyle,
} from "./style";
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

const HeroArea = ({ data }) => {
    const { t } = useTranslation()
    return (
        <HeroWrapper>
            <Container fluid>
                <Row alignItems="center">
                    <Col md={5}>
                        <ImageBoxWrap>
                            {data?.image && (
                                <ImageBoxTwo>
                                    <Image src={data.image} />
                                </ImageBoxTwo>
                            )}
                        </ImageBoxWrap>
                    </Col>
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
                                data?.description && (
                                <MarkdownStyle>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {data.description?.description}
                                    </ReactMarkdown>
                                </MarkdownStyle>
                            )}
                            {
                                data?.link && 
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
                </Row>
            </Container>
        </HeroWrapper>
    );
};

export default HeroArea;
