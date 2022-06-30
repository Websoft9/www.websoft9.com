import React from "react";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import ClientLogo from "@ui/client-logo";
import { Container, Row, Col } from "@ui/wrapper";
import { data } from "./data";
import { SectionWrap } from "./style";

const slider = {
    slidesPerView: 6,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: true,
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

const Section = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SwiperSlider options={slider} vAlign="center">
                            {data.map((slide, i) => {
                                return (
                                    <SwiperSlide key={i} className="item">
                                        <ClientLogo
                                            image={slide.image}
                                            layout={3}
                                        />
                                    </SwiperSlide>
                                );
                            })}
                        </SwiperSlider>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default Section;
