import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "@ui/section-title";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import Testimonial from "@components/testimonial/layout-01";
import { SectionWrap } from "./style";

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

const Section = ({data}) => {
    return (
        <SectionWrap>
            <Container fluid className="cp-80">
                <Row>
                    <Col md={12}>
                        <SectionTitle mb={["47px", null, "60px"]} subtitle={data.texts} title={data.headings} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <SwiperSlider
                            options={slider}
                            paginationTop="80px"
                            opacityStyle
                        >
                            {data?.features?.map((testimonial) => {
                                 var img = new Object();
                                 img.src = testimonial.pictureUrl;
                                return (
                                    <SwiperSlide
                                        className="item"
                                        key={testimonial.id}
                                    >
                                        <Testimonial
                                            authorName={testimonial.fullName}
                                            authroRole={testimonial.title}
                                            authorImg={img}
                                            // rating={testimonial.rating}
                                            //review={testimonial.reviews?.[0]}
                                            subject={testimonial.reviews[0]}
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
