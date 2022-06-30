import React from "react";
import PropTypes from "prop-types";
import ITSolutionBox from "@components/box-image/layout-03";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import GridLine from "@components/grid-line";
import { ItemType } from "@utils/types";

const slider = {
    slidesPerView: 4,
    lazy: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 4,
        },
    },
};

const ITSolutionArea = ({ data }) => {
    return (
        <section className="feature-area position-relative">
            <GridLine />
            {data?.items && (
                <SwiperSlider options={slider} shadowSize="md">
                    {data.items?.map((item) => {
                        return (
                            <SwiperSlide className="item" key={item.id}>
                                <ITSolutionBox
                                    title={item.title}
                                    desc={item.excerpt}
                                    image={item?.icon?.images?.[0]}
                                    path={`/it-solution/${item.slug}`}
                                />
                            </SwiperSlide>
                        );
                    })}
                </SwiperSlider>
            )}
        </section>
    );
};

ITSolutionArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default ITSolutionArea;
