import styled, { css, device } from "@styled";
import { animateUpDown } from "@assets/css/animations";

export const GooglMapWrap = styled.div`
    width: 100%;
    height: 300px;
    position: relative;
    ${device.medium} {
        height: 400px;
    }
    .marker {
        position: absolute;
        ${(props) =>
            props.marker === "animated" &&
            css`
                img {
                    animation-timing-function: cubic-bezier(
                        0.54,
                        0.085,
                        0.5,
                        0.92
                    );
                    animation-name: ${animateUpDown};
                    animation-iteration-count: infinite;
                    animation-fill-mode: both;
                    animation-duration: 3s;
                }
            `};
    }
`;
