import React from "react";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import ClientLogo from "@ui/client-logo";
import { Container, Row, Col } from "@ui/wrapper";
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

const Section = ({data}) => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SwiperSlider options={slider} vAlign="center">
                            {data.features.map((slide, i) => {
                                var img = new Object();
                                img.src = slide.image;
                                return (
                                    <SwiperSlide key={i} className="item">
                                        <ClientLogo
                                            image={img}
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
