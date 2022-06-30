import React from "react";
import { Container } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import Testimonial from "@components/testimonial/layout-02";

import author1img from "@data/images/avatar/avatar-01-90x90.jpg";
import author2img from "@data/images/avatar/avatar-02-90x90.jpg";
import author3img from "@data/images/avatar/avatar-03-90x90.jpg";
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
const testimonials = [
    {
        id: 1,
        image: { src: author1img },
        name: "Abbie Ferguson",
        designation: "Marketing",
        description:
            "I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.",
        rating: 5,
    },
    {
        id: 2,
        image: { src: author2img },
        name: "John Snow",
        designation: "Web designer",
        description:
            "I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.",
        rating: 3,
    },
    {
        id: 3,
        image: { src: author3img },
        name: "Monica Blews",
        designation: "Web develop",
        description:
            "I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.",
        rating: 4,
    },
];

const Section = () => {
    return (
        <TestimonialWrapper>
            <Container>
                <SectionTitle
                    mb={["50px", null, "60px"]}
                    subtitle="TESTIMONIALS"
                    title="Why do people <span>love Mitech?</span>"
                />
                <SwiperSlider options={sliderSettings} paginationTop="80px">
                    {testimonials.map((testimonial) => {
                        return (
                            <SwiperSlide key={testimonial.id}>
                                <Testimonial
                                    authorName={testimonial.name}
                                    authroRole={testimonial.designation}
                                    authorImg={testimonial.image}
                                    rating={testimonial.rating}
                                    review={testimonial.description}
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
