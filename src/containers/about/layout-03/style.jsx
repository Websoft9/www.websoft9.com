import styled, { device, themeGet } from "@styled";
import { animateUpDown } from "@assets/css/animations";

export const AboutAreaWrap = styled.section`
    padding-block: 60px;
    position: relative;
    ${device.medium} {
        padding-block: 80px;
    }
    ${device.large} {
        padding-block-start: 100px;
        padding-block-end: 70px;
    }
`;

export const AboutTextBox = styled.div`
    max-width: 570px;
    width: 100%;
    margin-inline: auto;
    margin-block-start: 0px;
    margin-block-end: 30px;
    ${device.xxlarge} {
        margin-inline-end: 0;
    }
`;

export const MainImageBox = styled.div`
    position: relative;
    z-index: 8;
    text-align: center;
    max-height: 350px;
    margin-inline: auto;
    margin-block-start: 120px;
    max-width: 400px;
    margin-block-end: 85px;

    ${device.medium} {
        max-width: 570px;
    }
    ${device.large} {
        max-width: 400px;
        margin-block-end: 100px;
    }
    ${device.xlarge} {
        max-width: 570px;
        margin-block-end: 180px;
    }
`;

export const VideoBtnWrap = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const AboutImageBox = styled.div`
    position: relative;
    .animation_image {
        animation-timing-function: cubic-bezier(0.54, 0.085, 0.5, 0.92);
        animation-name: ${animateUpDown};
        animation-iteration-count: infinite;
        &.img-0 {
            position: absolute;
            z-index: 33;
            left: 0%;
            top: -30px;
            width: 140px !important;
            animation-duration: 3.2s;
            ${device.small} {
                left: 10%;
                top: -30px;
                width: 184px !important;
            }
            ${device.medium} {
                left: 6%;
                top: -70px;
                width: 200px !important;
            }
            ${device.large} {
                left: 0;
                top: -50px;
            }
            ${device.xxlarge} {
                left: 6%;
                top: -70px;
                width: 310px !important;
            }
        }
        &.img-1 {
            position: absolute;
            z-index: 33;
            left: 50%;
            top: -65px;
            width: 130px !important;
            animation-duration: 3.8s;
            ${device.large} {
                top: -103px;
                width: 188px !important;
            }
        }
        &.img-2 {
            position: absolute;
            z-index: 33;
            bottom: -85px;
            left: 5%;
            width: 110px !important;
            animation-duration: 3.4s;

            ${device.large} {
                left: 10%;
                width: 188px !important;
            }
            ${device.xxlarge} {
                left: 10%;
                bottom: -160px;
            }
        }
        &.img-3 {
            position: absolute;
            z-index: 33;
            top: 100%;
            right: 15px;
            width: 120px !important;
            animation-duration: 3.4s;
            ${device.large} {
                right: 35px;
                top: 80%;
                width: 150px !important;
            }
            ${device.xlarge} {
                right: 50px;
                left: auto;
            }
            ${device.xxlarge} {
                top: 100%;
                width: 190px !important;
            }
        }
    }
    img {
        border-radius: ${themeGet("radii.md")};
    }
`;
