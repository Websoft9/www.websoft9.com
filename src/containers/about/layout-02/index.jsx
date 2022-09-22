import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "@ui/wrapper";
import VideoButton from "@ui/video-button";
import Image from "@ui/image";
import Text from "@ui/text";
import Button from "@ui/button";
import List, { ListItem } from "@ui/list";
import { ImageType, VideoButtonType, TextType, ButtonType } from "@utils/types";
import {
    OurMissionWrap,
    OurMissionImageWrap,
    MissionContentWrap,
    VideoBtnWrap,
    ButtonWrap,
} from "./style";

const AboutArea = ({ data }) => {
    return (
        <OurMissionWrap>
            <Row>
                <Col lg={6}>
                    <OurMissionImageWrap>
                        {data?.images?.[0]?.src && (
                            <Image
                                src={data.images[0].src}
                                alt={data.images[0]?.alt || "Our Mission"}
                            />
                        )}
                        {data?.video_button && (
                            <VideoBtnWrap>
                                <VideoButton
                                    color="primary"
                                    link={data.video_button?.link}
                                />
                            </VideoBtnWrap>
                        )}
                    </OurMissionImageWrap>
                </Col>
                <Col lg={{ span: 5, offset: 1 }}>
                    <MissionContentWrap>
                        {data.texts?.[0].content && (
                            <Text
                                fontSize="18px"
                                mb="30px"
                                dangerouslySetInnerHTML={{
                                    __html: data.texts[0].content,
                                }}
                            />
                        )}
                        {data?.list && (
                            <List layout="check">
                                {data.list.map((item, i) => (
                                    <ListItem key={`list-item-${i}`}>
                                        <span className="icon">
                                            <i className="fa fa-check"></i>
                                        </span>
                                        <span>{item}</span>
                                    </ListItem>
                                ))}
                            </List>
                        )}
                        {data?.buttons && (
                            <ButtonWrap>
                                {data.buttons.map(
                                    ({ id, content, ...rest }) => (
                                        <Button key={id} {...rest}>
                                            {content}
                                        </Button>
                                    )
                                )}
                            </ButtonWrap>
                        )}
                    </MissionContentWrap>
                </Col>
            </Row>
        </OurMissionWrap>
    );
};

AboutArea.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        video_button: PropTypes.shape(VideoButtonType),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        list: PropTypes.arrayOf(PropTypes.string),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
    }),
};

export default AboutArea;
