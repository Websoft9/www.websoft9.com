import styled, { css, themeGet } from "@styled";
import { jump } from "@assets/css/animations";

export const ProgressCircleWrap = styled.div`
    width: 160px;
    height: 160px;
    position: relative;
    .CircularProgressbar-trail {
        stroke: ${themeGet("colors.gray.300")};
    }
    .circle-design {
        position: absolute;
        border-radius: ${themeGet("radii.round")};
        animation: ${jump} infinite 2s;
        animation-direction: alternate;
        &.one {
            width: 43px;
            height: 43px;
            left: 0;
            bottom: 28px;
        }
        &.two {
            width: 17px;
            height: 17px;
            right: -20px;
            top: 50%;
            margin-block-start: -8px;
            animation-delay: 1s;
        }
    }
    .progress-child {
        width: 84%;
        height: 84%;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${themeGet("colors.white")};
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 34px;
        font-weight: 700;
    }
    ${(props) =>
        props.variant === "primary" &&
        css`
            .progress-child {
                background-color: ${themeGet("colors.primary")};
            }
            .CircularProgressbar-path {
                stroke: ${themeGet("colors.primary")};
            }
            .circle-design {
                background-color: ${themeGet("colors.primary")};
            }
        `}
    ${(props) =>
        props.variant === "secondary" &&
        css`
            .progress-child {
                background-color: ${themeGet("colors.secondary")};
            }
            .CircularProgressbar-path {
                stroke: ${themeGet("colors.secondary")};
            }
            .circle-design {
                background-color: ${themeGet("colors.secondary")};
            }
        `}
    ${(props) =>
        props.variant === "gradient" &&
        css`
            .progress-child {
                background-color: ${(props) => props.endColor};
                background-image: -webkit-linear-gradient(
                    314deg,
                    ${(props) => props.startColor} 0,
                    ${(props) => props.endColor} 100%
                );
                background-image: -o-linear-gradient(
                    314deg,
                    ${(props) => props.startColor} 0,
                    ${(props) => props.endColor} 100%
                );
                background-image: linear-gradient(
                    -224deg,
                    ${(props) => props.startColor} 0,
                    ${(props) => props.endColor} 100%
                );
            }
            .circle-design {
                background-color: ${(props) => props.endColor};
                background-image: -webkit-linear-gradient(
                    314deg,
                    ${(props) => props.startColor} 0,
                    ${(props) => props.endColor} 100%
                );
                background-image: -o-linear-gradient(
                    314deg,
                    ${(props) => props.startColor} 0,
                    ${(props) => props.endColor} 100%
                );
                background-image: linear-gradient(
                    -224deg,
                    ${(props) => props.startColor} 0,
                    ${(props) => props.endColor} 100%
                );
            }
        `}
`;
