import Button from "@ui/button";
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
                            {data?.headings && (
                                <StyledSubtitle as="h3">
                                    {data.headings}
                                </StyledSubtitle>
                            )}                   
                            {data?.texts && (
                                <Text>{data.texts}</Text>
                            )}
                            {data?.buttons?.map(
                                ({id, path, content, ...rest }) => (
                                    <Button
                                        key={id}
                                        m="10px"
                                        size="small"
                                        path={path}
                                    >
                                    {content}
                                </Button>
                                )
                            )}
                        </HeroTextBox>
                    </Col>
                    <Col md={6}>
                        <div style={{maxWidth: '600px',height:'100%'}}>
                            <ImageBoxWrap className={cn(className, "popup-video")}>
                                {data?.media && (
                                    <Image src={data.media} alt=""/>
                                )}
                            </ImageBoxWrap>
                        </div>
                    </Col>
                </Row>
            </Container>
        </HeroWrapper>
    );
};

export default HeroArea;
