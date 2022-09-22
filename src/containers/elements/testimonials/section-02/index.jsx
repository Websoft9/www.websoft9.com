import React from "react";
import { Container } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import Testimonial from "@components/testimonial/layout-02";

import { TestimonialWrapper } from "./style";

const sliderSettings = {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 60,
    pagination: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
    },
};

const Section = ({data}) => {
    var img = new Object();
    img.src = data.image;
    return (
        <TestimonialWrapper>
            <Container>
                <SwiperSlider options={sliderSettings}>
                    <SwiperSlide key={data.id}> 
                        <Testimonial
                            authorName={data.fullName}
                            authroRole={data.title}
                            authorImg={img}
                            rating={5}
                            review={data.reviews}
                        />
                    </SwiperSlide>
                </SwiperSlider>
            </Container>
        </TestimonialWrapper>
    );
};

export default Section;
