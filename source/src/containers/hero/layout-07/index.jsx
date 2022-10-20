import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Text from "@ui/text";
import cn from "clsx";
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
} from "./style";
import { Trans,useTranslation } from 'gatsby-plugin-react-i18next';
import { color } from "@mui/system";

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
                                <Image src={data.media} />
                            )}
                        </ImageBoxWrap>
                    </Col>
                </Row>
            </Container>
        </HeroWrapper>
    );
};

export default HeroArea;
