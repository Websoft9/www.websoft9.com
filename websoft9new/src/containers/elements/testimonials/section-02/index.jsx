import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "@ui/section-title";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import Testimonial from "@components/testimonial/layout-01";
import { SectionWrap } from "./style";

import author1img from "@data/images/avatar/avatar-01-70x70.jpg";
import author2img from "@data/images/avatar/avatar-02-70x70.jpg";
import author3img from "@data/images/avatar/avatar-03-70x70.jpg";
import author4img from "@data/images/avatar/avatar-04-70x70.jpg";

const slider = {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    speed: 1000,
    spaceBetween: 50,
    pagination: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 2,
        },
        1499: {
            slidesPerView: 3,
        },
    },
};

const testimonials = [
    {
        id: 1,
        image: { src: author1img },
        name: "Abbie Ferguson",
        designation: "Marketing",
        subject:
            "The Mitech team works really hard to ensure high level of quality",
        description:
            "I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.",
        rating: 5,
    },
    {
        id: 2,
        image: { src: author2img },
        name: "John Snow",
        designation: "Web designer",
        subject:
            "The Mitech team works really hard to ensure high level of quality",
        description:
            "I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.",
        rating: 3,
    },
    {
        id: 3,
        image: { src: author3img },
        name: "Monica Blews",
        designation: "Web developer",
        subject:
            "The Mitech team works really hard to ensure high level of quality",
        description:
            "I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.",
        rating: 4,
    },
    {
        id: 4,
        image: { src: author4img },
        name: "Stephen",
        designation: "Web developer",
        subject:
            "The Mitech team works really hard to ensure high level of quality",
        description:
            "I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.",
        rating: 4,
    },
];

const Section = () => {
    return (
        <SectionWrap>
            <Container fluid className="cp-80">
                <Row>
                    <Col md={12}>
                        <SectionTitle
                            mb="60px"
                            subtitle="TESTIMONIALS"
                            title="Why do people <span>love Mitech?</span>"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <SwiperSlider
                            options={slider}
                            paginationTop="80px"
                            opacityStyle
                        >
                            {testimonials.map((testimonial) => {
                                return (
                                    <SwiperSlide
                                        className="item"
                                        key={testimonial.id}
                                    >
                                        <Testimonial
                                            authorName={testimonial.name}
                                            authroRole={testimonial.designation}
                                            authorImg={testimonial.image}
                                            rating={testimonial.rating}
                                            review={testimonial.description}
                                            subject={testimonial.subject}
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
