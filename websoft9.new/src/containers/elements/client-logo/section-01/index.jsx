import React from "react";
import { Container } from "react-bootstrap";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import ClientLogo from "@ui/client-logo";
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
                <SwiperSlider options={slider} vAlign="center">
                    {data.map((slide, i) => {
                        return (
                            <SwiperSlide key={i} className="item">
                                <ClientLogo
                                    image={slide.image}
                                    hoverImage={slide.hoverImg}
                                />
                            </SwiperSlide>
                        );
                    })}
                </SwiperSlider>
            </Container>
        </SectionWrap>
    );
};

export default Section;
