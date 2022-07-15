import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { jump } from "@assets/css/animations";

export const ProgressCircleWrap = styled.div`
    width: 160px;
    height: 160px;
    position: relative;
    .CircularProgressbar-trail {
        stroke: #d6d6d6;
    }

    .CircularProgressbar-path {
        stroke: ${(props) => props.color || themeGet("colors.primary")};
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
        color: #000;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 24px;
        font-weight: 400;
        background-color: transparent;
    }
`;
