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

const slider = {
    slidesPerView: 6,
    loop: false,
    speed: 1000,
    spaceBetween: 30,
    autoplay: false,
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 5,
        },
        1499: {
            slidesPerView: 6,
        },
    },
};

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
                            {/* {
                                data?.customers && (
                                <SwiperSlider options={slider} vAlign="center">
                                {data.customers.map((slide, i) => {
                                    return (
                                        <SwiperSlide key={i} className="item">
                                            <ClientLogo
                                                image={slide.logo}
                                                layout={3}
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                                </SwiperSlider>
                            )} */}
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
