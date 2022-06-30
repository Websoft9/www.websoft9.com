import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import Image from "@ui/image";
import ImageOne from "@data/images/blog/blog-02-500x338.jpg";
import ImageTwo from "@data/images/blog/blog-03-500x338.jpg";
import ImageThree from "@data/images/blog/blog-04-500x338.jpg";
import ImageFour from "@data/images/blog/blog-05-500x338.jpg";
import { SectionWrap } from "./style";

const sliderSettings = {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
};

const CarouselSlider = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Heading as="h3" mb="60px" textAlign="center">
                            Carousel Slider
                        </Heading>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <SwiperSlider options={sliderSettings}>
                            <SwiperSlide className="item">
                                <Image src={ImageOne} alt="Slider" />
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <Image src={ImageTwo} alt="Slider" />
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <Image src={ImageThree} alt="Slider" />
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <Image src={ImageFour} alt="Slider" />
                            </SwiperSlide>
                        </SwiperSlider>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default CarouselSlider;
