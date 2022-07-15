import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Container } from "@ui/wrapper";
import Button from "@ui/button";
import ModalVideo from "@ui/modal-video";
import Image from "@ui/image";
import {
    HeadingType,
    ButtonType,
    ImageType,
    TextType,
    VideoButtonType,
} from "@utils/types";
import {
    HeroWrapper,
    HeroContent,
    HeroBtnGroup,
    HeroSeparator,
    StyledSubtitle,
    StyledTitle,
    StyledDesc,
    StyledBG,
} from "./style";

const HeroArea = ({ data }) => {
    const [videoOpen, setVideoOpen] = useState(false);
    const modalVideoOpen = () => {
        setVideoOpen(true);
    };
    const modalVideoClose = () => {
        setVideoOpen(false);
    };

    return (
        <Fragment>
            <HeroWrapper>
                {data.images?.[0]?.src && (
                    <StyledBG>
                        <Image
                            src={data.images?.[0]?.src}
                            alt={data.images[0]?.alt || "Hero Image"}
                        />
                    </StyledBG>
                )}
                <Container>
                    <HeroContent>
                        {data?.headings?.[0] && (
                            <StyledSubtitle as={data.headings[0]?.level}>
                                {data.headings[0]?.content}
                            </StyledSubtitle>
                        )}
                        {data?.headings?.[1] && (
                            <StyledTitle as={data.headings[1]?.level}>
                                {data.headings[1]?.content}
                            </StyledTitle>
                        )}
                        {data?.texts?.[0] && (
                            <StyledDesc>{data.texts[0]?.content}</StyledDesc>
                        )}

                        <HeroBtnGroup>
                            {data?.buttons?.map(
                                ({ id, path, content, ...rest }) => (
                                    <Button
                                        key={id}
                                        m="10px"
                                        path={path}
                                        fontSize="14px"
                                        {...rest}
                                    >
                                        {content}
                                    </Button>
                                )
                            )}
                            {data?.video_button && (
                                <Button
                                    color="white"
                                    iconposition="left"
                                    icondistance="8px"
                                    onClick={modalVideoOpen}
                                    icon="fa fa-play"
                                    m="10px"
                                    fontSize="14px"
                                >
                                    {data.video_button?.content}
                                </Button>
                            )}
                        </HeroBtnGroup>
                    </HeroContent>
                </Container>
                <HeroSeparator>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        preserveAspectRatio="none"
                        viewBox="0 0 100 100"
                    >
                        <path d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
                    </svg>
                </HeroSeparator>
            </HeroWrapper>
            {data?.video_button && (
                <ModalVideo
                    video_link={data.video_button.link}
                    isOpen={videoOpen}
                    onClose={modalVideoClose}
                />
            )}
        </Fragment>
    );
};

HeroArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        video_button: PropTypes.shape(VideoButtonType),
    }),
};

export default HeroArea;
