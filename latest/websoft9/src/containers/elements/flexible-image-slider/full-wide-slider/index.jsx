import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import Image from "@ui/image";
import { SectionWrap } from "./style";

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
        // 1200: {
        //     slidesPerView: 3,
        // },
    },
};

const FullWideSlider = ({data}) => {
    return (
        <SectionWrap>
            <Container>
                {/* <Row>
                    <Col lg={12}>
                        <Heading as="h3" mb="60px" textAlign="center">
                            Full Wide Slider
                        </Heading>
                    </Col>
                </Row> */}
                <Row>
                    <Col lg={12}>
                        <SwiperSlider
                            options={sliderSettings}
                            paginationTop="80px"
                        >
                            {
                                data?.map && data.map((item)=>{
                                    return (
                                        <SwiperSlide key={item.key} className="item">
                                            <Image src={item.value} alt="Slider" />
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
