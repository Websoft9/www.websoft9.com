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
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import ClientLogo from "@ui/client-logo";

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
