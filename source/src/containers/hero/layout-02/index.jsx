import Button from "@ui/button";
import PopupVideoTwo from "@ui/popup-video/layout-02";
import Text from "@ui/text";
import { Col, Container, Row } from "@ui/wrapper";
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from "react";
import {
    HeroTextBox, HeroWrapper, StyledSubtitle
} from "./style";
import "/node_modules/video-react/dist/video-react.css";

const HeroArea = ({ data }) => {
    const { t } = useTranslation()

    return (
        <HeroWrapper>
            <Container fluid>
                <Row alignItems="center">
                    <Col md={6}>
                        <HeroTextBox>
                            {data?.headings && (
                                <StyledSubtitle as="h3">
                                    {data.headings}
                                </StyledSubtitle>
                            )}
                            {data?.texts && (
                                <Text>{data.texts}</Text>
                            )}
                            {data?.buttons?.map(
                                ({id, path, content, ...rest }) => (
                                    <Button
                                        key={id}
                                        m="10px 10px 10px 0px"
                                        size="small"
                                        path={path}
                                        // {...rest}
                                    >
                                        {content}
                                </Button>
                                )
                            )}
                        </HeroTextBox>
                    </Col>
                    <Col md={6} >
                        {/* <Player playsInline autoPlay={true} preload="auto" loop={true} >
                            <ControlBar autoHide={true} />
                            <source src={data.media} type="video/mp4" />
                        </Player> */}
                        <div style={{maxWidth: '600px',height:'100%'}}>
                            <PopupVideoTwo
                                image={{ src: data.backgourdImage }}
                                video_button={{
                                    link: data.media,
                                }}
                            />
                        </div>

                    </Col>
                </Row>
            </Container>
        </HeroWrapper>
    );
};

export default HeroArea;
