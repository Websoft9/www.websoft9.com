import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import Image from "@ui/image";
import ModalVideo from "@ui/modal-video";
import { ImageType } from "@utils/types";
import { VideoThumbWrapper } from "./style";

const VideoThumb = ({ poster, title, video_link, className, shape, size }) => {
    const [videoOpen, setVideoOpen] = useState(false);
    const modalVideoOpen = () => {
        setVideoOpen(true);
    };
    const modalVideoClose = () => {
        setVideoOpen(false);
    };
    return (
        <Fragment>
            <VideoThumbWrapper
                onClick={modalVideoOpen}
                className={cn(className, "video-thumb")}
                $shape={shape}
                $size={size}
            >
                {poster?.src && (
                    <div className="video-poster">
                        <Image src={poster.src} alt={title} />
                    </div>
                )}
                <div className="video-overlay">
                    <div className="video-button">
                        <div className="video-play">
                            <span className="video-play-icon"></span>
                        </div>
                    </div>
                </div>
            </VideoThumbWrapper>

            <ModalVideo
                video_link={video_link}
                isOpen={videoOpen}
                onClose={modalVideoClose}
            />
        </Fragment>
    );
};

VideoThumb.propTypes = {
    poster: PropTypes.shape(ImageType),
    title: PropTypes.string,
    video_link: PropTypes.string,
    shape: PropTypes.oneOf(["square", "rounded"]),
    size: PropTypes.oneOf(["small", "large"]),
    className: PropTypes.string,
};

VideoThumb.defaultProps = {
    shape: "square",
    size: "large",
};

export default VideoThumb;
