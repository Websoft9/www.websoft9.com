import React from "react";
import { Container } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import Testimonial from "@components/testimonial/layout-02";

import { TestimonialWrapper } from "./style";

const sliderSettings = {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 60,
    pagination: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },
    },
};

const Section = ({data}) => {
    return (
        <TestimonialWrapper>
            <Container>
                <SectionTitle
                    mb={["50px", null, "60px"]}
                    subtitle={data.texts}
                    title={data.headings}
                />
                <SwiperSlider options={sliderSettings} paginationTop="80px">
                    {data.features.map((feature) => {
                        var img = new Object();
                        img.src = feature.image;
                        return (
                            <SwiperSlide key={feature.id}> 
                                <Testimonial
                                    authorName={feature.fullName}
                                    authroRole={feature.title}
                                    authorImg={img}
                                    rating={5}
                                    review={feature.reviews}
                                />
                            </SwiperSlide>
                        );
                    })}
                </SwiperSlider>
            </Container>
        </TestimonialWrapper>
    );
};

export default Section;
