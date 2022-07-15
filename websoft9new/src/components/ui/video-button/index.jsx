import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import ModalVideo from "@ui/modal-video";
import {
    VideoButtonWrap,
    VideoButtonInner,
    VideoMark,
    VideoPlay,
    VideoPlayIcon,
    VideoText,
} from "./style";

const VideoButton = ({
    content,
    link,
    className,
    color,
    size,
    variant,
    textStyle,
    icon,
    border,
    ...restProps
}) => {
    const [videoOpen, setVideoOpen] = useState(false);
    const modalVideoOpen = () => {
        setVideoOpen(true);
    };

    const modalVideoClose = () => {
        setVideoOpen(false);
    };

    return (
        <>
            <VideoButtonWrap
                onClick={modalVideoOpen}
                className={cn(className, "video-btn")}
                $color={color}
                $size={size}
                $variant={variant}
                $textStyle={textStyle}
                $icon={icon}
                $border={border}
                {...restProps}
            >
                <VideoButtonInner>
                    {restProps.wave !== "false" && (
                        <VideoMark>
                            <div className="wave-pulse wave-pulse-1"></div>
                            <div className="wave-pulse wave-pulse-2"></div>
                        </VideoMark>
                    )}
                    <VideoPlay>
                        <VideoPlayIcon></VideoPlayIcon>
                    </VideoPlay>
                </VideoButtonInner>
                {content && (
                    <VideoText dangerouslySetInnerHTML={{ __html: content }} />
                )}
            </VideoButtonWrap>
            <ModalVideo
                video_link={link}
                isOpen={videoOpen}
                onClose={modalVideoClose}
            />
        </>
    );
};

VideoButton.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "gradient",
        "transparent",
    ]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    variant: PropTypes.oneOf(["outlined", "contained", "texted"]),
    textStyle: PropTypes.oneOf([1, 2]),
    icon: PropTypes.shape({}),
    content: PropTypes.string,
    className: PropTypes.string,
    link: PropTypes.string,
    border: PropTypes.string,
};

VideoButton.defaultProps = {
    color: "light",
};

export default VideoButton;
