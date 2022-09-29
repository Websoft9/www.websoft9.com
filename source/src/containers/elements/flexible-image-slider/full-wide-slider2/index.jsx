import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import Image from "@ui/image";
import { SectionWrap } from "./style";
import SectionTitle from "@ui/section-title";

const sliderSettings = {
    slidesPerView: 1,
    loop: true,
    pagination: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
};

const FullWideSlider = ({data}) => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle mb={["47px", null, "60px"]} subtitle={data.texts} title={data.headings} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <SwiperSlider
                            options={sliderSettings}
                            paginationTop="80px"
                        >
                            {
                                data?.features.map && data?.features.map((item)=>{
                                    return (
                                        <SwiperSlide key={item.id} className="item">
                                            <Image src={item.image} alt="Slider" />
                                        </SwiperSlide>
                                    );
                                })
                            }
                        </SwiperSlider>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default FullWideSlider;
