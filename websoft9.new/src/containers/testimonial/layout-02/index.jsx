import React from "react";
import PropTypes from "prop-types";
import { Container } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import Testimonial from "@components/testimonial/layout-02";
import { SectionTitleType, ItemType } from "@utils/types";
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

const TestimonialArea = ({ data }) => {
    return (
        <TestimonialWrapper>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        mb={["50px", null, "60px"]}
                        title={data.section_title?.title}
                        subtitle={data.section_title?.subtitle}
                    />
                )}
                {data?.items && (
                    <SwiperSlider options={sliderSettings} paginationTop="80px">
                        {data.items?.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <Testimonial
                                    authorName={testimonial.name}
                                    authroRole={testimonial.designation}
                                    authorImg={testimonial.images?.[0]}
                                    rating={testimonial.rating}
                                    review={testimonial.description}
                                />
                            </SwiperSlide>
                        ))}
                    </SwiperSlider>
                )}
            </Container>
        </TestimonialWrapper>
    );
};

TestimonialArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default TestimonialArea;
