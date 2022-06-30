import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import PopupVideoOne from "@ui/popup-video/layout-01";
import PopupVideoTwo from "@ui/popup-video/layout-02";
import ImageOne from "@data/images/box-image/video-image-01-570x420.jpg";
import { SectionWrap } from "./style";

const PopupVideoArea = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col md={6} className="popup-one">
                        <PopupVideoOne
                            image={{ src: ImageOne }}
                            video_button={{
                                link: "https://www.youtube.com/watch?v=9No-FiEInLA",
                            }}
                        />
                    </Col>
                    <Col md={6}>
                        <PopupVideoTwo
                            image={{ src: ImageOne }}
                            video_button={{
                                link: "https://www.youtube.com/watch?v=9No-FiEInLA",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

export default PopupVideoArea;
