import React from "react";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import ClientLogo from "@ui/client-logo";
import { Container, Row, Col } from "@ui/wrapper";
import { SectionWrap } from "./style";
import SectionTitle from "@ui/section-title";

const slider = {
    slidesPerView: 6,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: true,
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 5,
        },
        1499: {
            slidesPerView: 6,
        },
    },
};

const Section = ({data}) => {
    return (
        <SectionWrap>
            <Container>
                <SectionTitle
                        mb={["47px", null, "60px"]}
                        title={data.headings}
                        subtitle={data.texts}
                    />
                <Row>
                    <Col lg={12}>
                        <SwiperSlider options={slider} vAlign="center">
                            {data.features.map((slide, i) => {
                                return (
                                    <SwiperSlide key={slide.id+i+i} className="item">
                                        <ClientLogo
                                            image={slide.logo}
                                            layout={4}
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
