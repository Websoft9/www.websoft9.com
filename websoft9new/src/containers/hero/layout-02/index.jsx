import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Image from "@ui/image";
import VideoButton from "@ui/video-button";
import AppointmentForm from "@components/forms/appointment-form";
import { HeadingType, VideoButtonType, ImageType } from "@utils/types";
import {
    HeroWrapper,
    StyledBG,
    HeroTextWrap,
    HeroButton,
    AppointmentWrap,
    AppointmentTitleWrap,
    AppointmentFormWrap,
    StyledSubtitle,
    StyledTitle,
} from "./style";

const HeroArea = ({ data }) => {
    return (
        <HeroWrapper>
            {data?.images[0]?.src && (
                <StyledBG>
                    <Image
                        src={data.images[0].src}
                        alt={data.images[0]?.alt || "Appointment"}
                    />
                </StyledBG>
            )}
            <Container>
                <Row alignItems="center">
                    <Col md={6}>
                        <HeroTextWrap>
                            {data?.headings?.[0] && (
                                <StyledSubtitle as={data.headings[0].level}>
                                    {data.headings[0].content}
                                </StyledSubtitle>
                            )}
                            {data?.headings?.[1] && (
                                <StyledTitle as={data.headings[1].level}>
                                    {data.headings[1].content}
                                </StyledTitle>
                            )}
                            {data?.video_button && (
                                <HeroButton>
                                    <VideoButton
                                        link={data.video_button.link}
                                        content={data.video_button.content}
                                    />
                                </HeroButton>
                            )}
                        </HeroTextWrap>
                    </Col>
                    <Col lg={5} md={6} className="mx-auto">
                        {data?.show_form && (
                            <AppointmentWrap>
                                <AppointmentTitleWrap>
                                    <Heading as="h5" mb="10px">
                                        Book appointment
                                    </Heading>
                                    <Text>
                                        It&apos;s out pleasure to have a chance
                                        to cooperate.
                                    </Text>
                                </AppointmentTitleWrap>
                                <AppointmentFormWrap>
                                    <AppointmentForm />
                                </AppointmentFormWrap>
                            </AppointmentWrap>
                        )}
                    </Col>
                </Row>
            </Container>
        </HeroWrapper>
    );
};

HeroArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        video_button: PropTypes.shape(VideoButtonType),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        show_form: PropTypes.bool,
    }),
};

export default HeroArea;
