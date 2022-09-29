import styled, { css, device, themeGet } from "@styled";

export const StyledWrap = styled.div`
    position: relative;

    ${({ $shadowSize }) =>
        !!$shadowSize &&
        css`
            .swiper-slide {
                & > * {
                    transition: all 0.3s ease 0s;
                }
                &:not(.swiper-slide-visible) {
                    & > * {
                        box-shadow: none;
                    }
                }
            }
            ${$shadowSize === "lg" &&
            css`
                .swiper {
                    padding: 0 15px 45px;
                    margin: 0 -15px -45px !important;
                    ${device.large} {
                        padding: 0 25px 55px;
                        margin: 0 -25px -55px !important;
                    }
                    ${device.xlarge} {
                        padding: 0 30px 65px;
                        margin: 0 -30px -65px !important;
                    }
                }
            `}
            ${$shadowSize === "md" &&
            css`
                .swiper {
                    padding: 0 0 25px;
                    margin: 0 0 -25px !important;
                }
            `}
        `}

    ${({ $dotStyle }) =>
        !!$dotStyle &&
        css`
            ${$dotStyle === 1 &&
            css`
                .swiper-pagination {
                    bottom: 0;
                    margin-top: 30px;
                    &-bullet {
                        width: 10px;
                        height: 10px;
                        border: 0;
                        border-radius: 0;
                        background: transparent;
                        opacity: 1;
                        position: relative;
                        outline: none;
                        &:before {
                            content: "";
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            border-radius: 100%;
                            width: 8px;
                            height: 8px;
                            background: #d8d8d8;
                            z-index: 1;
                            transition: all 0.7s
                                cubic-bezier(0.645, 0.045, 0.355, 1);
                        }
                        &-active,
                        &:hover {
                            &:before {
                                width: 12px;
                                height: 12px;
                                opacity: 1;
                                background: ${themeGet("colors.primary")};
                            }
                        }
                    }
                }
            `}
            ${$dotStyle === 2 &&
            css`
                .swiper-pagination {
                    bottom: 0;
                    margin-top: 30px;
                    &-bullet {
                        width: 10px;
                        height: 10px;
                        border: 0;
                        border-radius: 0;
                        background: transparent;
                        opacity: 1;
                        position: relative;
                        outline: none;
                        margin: 8px;
                        &:before {
                            content: "";
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            border-radius: 100%;
                            width: 8px;
                            height: 8px;
                            background: #d8d8d8;
                            z-index: 1;
                            transition: all 0.7s
                                cubic-bezier(0.645, 0.045, 0.355, 1);
                        }
                        &:hover {
                            &:before {
                                width: 12px;
                                height: 12px;
                                opacity: 1;
                                background: ${themeGet("colors.heading")};
                            }
                        }
                        &-active {
                            &:before {
                                opacity: 1;
                                background: ${themeGet("colors.heading")};
                                width: 16px;
                                height: 16px;
                                box-shadow: 0 0 9px #8b7b7b;
                            }
                            &:hover:before {
                                width: 16px;
                                height: 16px;
                            }
                        }
                    }
                }
            `}
        `}

    ${({ $paginationTop }) =>
        $paginationTop &&
        css`
            .swiper-wrapper {
                margin-bottom: ${$paginationTop};
            }
        `}
    ${({ $vAlign }) =>
        $vAlign &&
        css`
            .swiper-wrapper,
            .swiper-autoheight .swiper-wrapper {
                align-items: center;
            }
        `}
    ${({ $opacityStyle }) =>
        $opacityStyle &&
        css`
            .swiper-slide {
                &-prev,
                &-next {
                    opacity: 0.5;
                }
            }
        `}
`;
