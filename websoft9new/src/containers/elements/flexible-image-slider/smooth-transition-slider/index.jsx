import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import Image from "@ui/image";
import ImageOne from "@data/images/blog/blog-02-900x678.jpg";
import ImageTwo from "@data/images/blog/blog-03-900x678.jpg";
import ImageThree from "@data/images/blog/blog-04-900x678.jpg";
import ImageFour from "@data/images/blog/blog-05-900x678.jpg";
import { SectionWrap } from "./style";

const sliderSettings = {
    slidesPerView: "auto",
    freeMode: true,
    loop: true,
    autoplay: true,
    delay: 0,
    speed: 7000,
};

const SmoothTransitionSlider = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Heading as="h3" mb="60px" textAlign="center">
                            Free Mode &amp; Smooth Transition
                        </Heading>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <SwiperSlider settings={sliderSettings}>
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

export default SmoothTransitionSlider;
