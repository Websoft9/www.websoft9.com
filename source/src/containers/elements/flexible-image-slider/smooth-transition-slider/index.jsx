import Image from "@ui/image";
import SectionTitle from "@ui/section-title";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import { Col, Container, Row } from "@ui/wrapper";
import React from "react";
import { SectionWrap } from "./style";

const sliderSettings = {
    slidesPerView: "auto",
    freeMode: true,
    loop: true,
    autoplay: true,
    delay: 0,
    speed: 7000,
};

const SmoothTransitionSlider = ({data}) => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        {/* <Heading as="h3" mb="60px" textAlign="center">
                            Free Mode &amp; Smooth Transition
                        </Heading> */}
                        <SectionTitle mb={["47px", null, "60px"]} subtitle={data.texts} title={data.headings} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <SwiperSlider settings={sliderSettings}>
                            {
                                data?.features.map((item)=>{
                                    return (
                                        <SwiperSlide key={item.id} className="item">
                                            <Image src={item.image} alt="Slider" />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </SwiperSlider>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default SmoothTransitionSlider;
