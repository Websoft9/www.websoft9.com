import React from "react";
import PropTypes from "prop-types";
import ModalVideo from "react-modal-video";
import { Portal } from "react-portal";
import { StyledModalVideo } from "./style";
// import './modal.css';

const VideoModal = ({ video_link, isOpen, onClose }) => {
    let video_arr, video_id, video_channel;
    if (video_link) {
        video_arr = video_link.split("=", -1);
        video_id = video_arr[1];
        video_channel = video_link.split(".")[1];
    }

    return (
        <Portal>
            <StyledModalVideo>
                <ModalVideo
                    channel={video_channel}
                    videoId={video_id}
                    isOpen={isOpen}
                    onClose={onClose}
                />
            </StyledModalVideo>
        </Portal>
    );
};

VideoModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    video_link: PropTypes.string,
};

export default VideoModal;
