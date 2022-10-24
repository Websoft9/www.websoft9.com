import GridLine from "@components/grid-line";
import Accordion from "@ui/accordion";
import Button from "@ui/button";
import Image from "@ui/image";
import SectionTitle from "@ui/section-title";
import VideoButton from "@ui/video-button";
import { Col, Container, Row } from "@ui/wrapper";
import React from "react";
import {
    AboutAreaWrap, AboutImageBox, AboutTextBox, MainImageBox,
    VideoBtnWrap
} from "./style";

const AboutArea = ({ data, gridLine }) => {
    return (
        <AboutAreaWrap>
            <Container fluid>
                {gridLine && <GridLine />}
                <Row alignItems="center">
                    <Col lg={6}>
                        <AboutTextBox>
                            {data?.section_title && (
                                <SectionTitle
                                    mb="40px"
                                    textAlign="left"
                                    title={data.section_title?.title}
                                    subtitle={data.section_title?.subtitle}
                                    description={
                                        data.section_title?.description
                                    }
                                />
                            )}

                            {data?.items && (
                                <Accordion
                                    allowZeroExpanded
                                    data={data.items}
                                />
                            )}

                            {data?.buttons?.map(
                                ({ id, path, content, ...rest }) => (
                                    <Button key={id} path={path} {...rest}>
                                        {content}
                                    </Button>
                                )
                            )}
                        </AboutTextBox>
                    </Col>
                    <Col lg={6}>
                        <AboutImageBox>
                            {data?.images.slice(1)?.map((img, i) => (
                                <div
                                    className={`animation_image img-${i}`}
                                    key={img.src.name}
                                >
                                    <Image
                                        src={img.src}
                                        alt={img?.alt || "about animated"}
                                    />
                                </div>
                            ))}
                            {data?.images?.[0] && (
                                <MainImageBox>
                                    <Image
                                        src={data.images[0].src}
                                        alt={data.images[0]?.alt || "About"}
                                    />
                                    {data?.video_button && (
                                        <VideoBtnWrap>
                                            <VideoButton
                                                color="primary"
                                                link={data.video_button.link}
                                            />
                                        </VideoBtnWrap>
                                    )}
                                </MainImageBox>
                            )}
                        </AboutImageBox>
                    </Col>
                </Row>
            </Container>
        </AboutAreaWrap>
    );
};

// AboutArea.propTypes = {
//     data: PropTypes.shape({
//         section_title: PropTypes.shape(SectionTitleType),
//         buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
//         video_button: PropTypes.shape(VideoButtonType),
//         images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
//         items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
//     }),
//     gridLine: PropTypes.bool,
// };

AboutArea.defaultProps = {
    gridLine: false,
};

export default AboutArea;
