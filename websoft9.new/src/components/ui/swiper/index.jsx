import React from "react";
import PropTypes from "prop-types";
import classnames from "clsx";
import { Navigation, Autoplay, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { StyledWrap } from "./style";
import "./swiper.css";

const SwiperSlider = ({
    options,
    prevIcon,
    nextIcon,
    navStyle,
    navPosition,
    dotStyle,
    dotPosition,
    paginationTop,
    shadowSize,
    children,
    className,
    vAlign,
    opacityStyle,
}) => {
    const sliderOptions = {
        modules: [Navigation, Pagination, A11y, Autoplay],
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
        watchSlidesProgress: true,
        autoHeight: true,
        ...options,
        navigation: options?.navigation
            ? {
                  nextEl: ".swiper-btn-next",
                  prevEl: ".swiper-btn-prev",
              }
            : false,
        pagination: options?.pagination ? { clickable: true } : false,
        autoplay: options?.autoplay
            ? {
                  delay: 2500,
                  disableOnInteraction: false,
              }
            : false,
    };

    return (
        <StyledWrap
            className={classnames(className, "swiper-wrap")}
            $navStyle={navStyle}
            $navPosition={navPosition}
            $dotStyle={dotStyle}
            $dotPosition={dotPosition}
            $shadowSize={shadowSize}
            $paginationTop={paginationTop}
            $vAlign={vAlign}
            $opacityStyle={opacityStyle}
        >
            <Swiper {...sliderOptions}>{children}</Swiper>
            {sliderOptions.navigation && (
                <>
                    <button
                        type="button"
                        className="swiper-btn swiper-btn-prev"
                    >
                        <i className={prevIcon} />
                    </button>
                    <button
                        type="button"
                        className="swiper-btn swiper-btn-next"
                    >
                        <i className={nextIcon} />
                    </button>
                </>
            )}
        </StyledWrap>
    );
};

export { SwiperSlide };

SwiperSlider.propTypes = {
    options: PropTypes.shape({
        navigation: PropTypes.bool,
        pagination: PropTypes.bool,
        loop: PropTypes.bool,
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        autoplay: PropTypes.bool,
        breakpoints: PropTypes.shape({}),
    }),
    vAlign: PropTypes.oneOf(["top", "center", "bottom"]),
    prevIcon: PropTypes.string,
    nextIcon: PropTypes.string,
    navStyle: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    navPosition: PropTypes.oneOf([1, 2, 3, 4, 5]),
    shadowSize: PropTypes.oneOf(["md", "lg"]),
    dotStyle: PropTypes.oneOf([1, 2, 3]),
    dotPosition: PropTypes.oneOf([1, 2, 3]),
    paginationTop: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    opacityStyle: PropTypes.bool,
};

SwiperSlider.defaultProps = {
    prevIcon: "fa fa-arrow-left",
    nextIcon: "fa fa-arrow-right",
    navStyle: 1,
    navPosition: 1,
    dotStyle: 1,
    dotPosition: 1,
};

export default SwiperSlider;
