import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "@ui/section-title";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import Testimonial from "@components/testimonial/layout-01";
import { SectionTitleType, ItemType } from "@utils/types";
import { TestimonialWrappper } from "./style";

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

const TestimonialArea = ({ data }) => {
    return (
        <TestimonialWrappper>
            {data?.section_title && (
                <SectionTitle
                    mb={["45px", null, "60px"]}
                    title={data.section_title?.title}
                    subtitle={data.section_title?.subtitle}
                />
            )}
            {data?.items && (
                <SwiperSlider
                    options={slider}
                    paginationTop="80px"
                    opacityStyle
                >
                    {data.items?.map((testimonial) => (
                        <SwiperSlide className="item" key={testimonial.id}>
                            <Testimonial
                                authorName={testimonial.name}
                                authroRole={testimonial.designation}
                                authorImg={testimonial.images?.[0]}
                                rating={testimonial.rating}
                                review={testimonial.description}
                                subject={testimonial.subject}
                            />
                        </SwiperSlide>
                    ))}
                </SwiperSlider>
            )}
        </TestimonialWrappper>
    );
};

TestimonialArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default TestimonialArea;
