import ClientLogo from "@ui/client-logo";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import { Col, Container, Row } from "@ui/wrapper";
import React from "react";
import { SectionWrap } from "./style";

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


const Section = ({data}) => {
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
                                            image={slide.logo}
                                            layout={4}
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
