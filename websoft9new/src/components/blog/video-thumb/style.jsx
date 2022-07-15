import styled, { css, themeGet } from "@styled";

export const VideoThumbWrapper = styled.div`
    position: relative;
    cursor: pointer;
    .video-poster {
        position: relative;
        img {
            width: 100%;
            border-radius: ${themeGet("radii.md")};
        }
    }
    .video-overlay {
        background-color: rgba(8, 106, 216, 0.8);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        ${({ $shape }) =>
            $shape === "rounded" &&
            css`
                border-radius: ${themeGet("radii.md")};
            `}
    }
    .video-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .video-play {
        background: 0 0;
        border-style: solid;
        border-color: #fff;
        color: #fff;
        position: relative;
        transition: all 1s cubic-bezier(0, 0, 0.2, 1) !important;
        border-radius: ${themeGet("radii.round")};
        ${({ $size }) =>
            $size === "small" &&
            css`
                width: 40px;
                height: 40px;
                border-width: 3px;
            `}
        ${({ $size }) =>
            $size === "large" &&
            css`
                width: 70px;
                height: 70px;
                border-width: 6px;
            `}
    }
    .video-play-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        line-height: 1;
        margin-inline-start: 1px;
        z-index: 2;
        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 0;
            transform: translate(-50%, -50%);
            border-style: solid;
            border-inline-start-color: currentColor;
            border-block-color: transparent;
            border-inline-end-width: 0px;
            ${({ $size }) =>
                $size === "small" &&
                css`
                    border-block-start-width: 8px;
                    border-block-end-width: 8px;
                    border-inline-start-width: 15px;
                `}
            ${({ $size }) =>
                $size === "large" &&
                css`
                    border-block-start-width: 13px;
                    border-block-end-width: 13px;
                    border-inline-start-width: 20px;
                `}
        }
    }
    &:hover {
        .video-play {
            transform: scale3d(1.15, 1.15, 1.15);
        }
    }
`;
