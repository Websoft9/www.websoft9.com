import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Image from "@ui/image";
import VideoButton from "@ui/video-button";
import ModalVideo from "@ui/modal-video";
import { ImageType, VideoButtonType } from "@utils/types";
import { PopupVideoWrap, VideoBtnWrap } from "./style";

const PopupVideo = ({ image, video_button, className }) => {
    const [videoOpen, setVideoOpen] = useState(false);

    const modalVideoOpen = () => {
        setVideoOpen(true);
    };
    const modalVideoClose = () => {
        setVideoOpen(false);
    };
    return (
        <Fragment>
            <PopupVideoWrap className={cn(className, "popup-video")}>
                {image?.src && (
                    <Image
                        src={image.src}
                        alt={image?.alt || "Popup thumbnail"}
                    />
                )}
                <VideoBtnWrap>
                    <VideoButton color="primary" onClick={modalVideoOpen} />
                </VideoBtnWrap>
            </PopupVideoWrap>
            <ModalVideo
                video_link={video_button?.link}
                isOpen={videoOpen}
                onClose={modalVideoClose}
            />
        </Fragment>
    );
};

PopupVideo.propTypes = {
    image: PropTypes.shape(ImageType),
    video_button: PropTypes.shape(VideoButtonType),
    className: PropTypes.string,
};

export default PopupVideo;
