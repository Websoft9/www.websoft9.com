import styled, { css, device, themeGet, space } from "@styled";

export const StyledAccordion = styled.div`
    ${space};

    ${(props) =>
        props.layout === 1 &&
        css`
            .accordion {
                border-width: 0px;
                border-radius: 0;
                &-item {
                    border-bottom: none;
                    margin-block-end: 20px;
                    border: none !important;
                    box-shadow: ${themeGet("shadows.md")};
                }
                &-header {
                    padding: 0;
                    border-bottom: 0;
                    background-color: ${themeGet("colors.white")};
                }
                &-button {
                    color: ${themeGet("colors.white")};
                    background: ${themeGet("colors.secondary")};
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                    border: none;
                    width: 100%;
                    text-align: left;
                    position: relative;
                    padding: 20px 30px;
                    white-space: normal;
                    font-size: 18px;
                    overflow-wrap: break-word;
                    line-height: 1.2;
                    font-weight: 500;
                    @media ${device.small} {
                        padding: 20px 30px 20px 20px;
                    }
                    &:before {
                        position: absolute;
                        content: "\f078";
                        font-family: "Font Awesome 5 Pro";
                        right: 30px;
                        top: 50%;
                        transform: translateY(-50%);
                        @media ${device.small} {
                            right: 20px;
                        }
                    }
                    &:after {
                        display: none;
                    }
                    &.collapsed {
                        color: #000000;
                        border-radius: 0;
                        background: ${themeGet("colors.white")};
                        &:before {
                            top: 35%;
                            transform: rotate(-180deg);
                        }
                    }
                    &:focus {
                        box-shadow: none;
                    }
                }
                &-body {
                    padding: 23px 20px 29px;
                    ${device.small} {
                        padding: 23px 30px 29px;
                    }
                }
            }
        `}

    ${(props) =>
        props.layout === 2 &&
        css`
            .accordion {
                border-width: 0px;
                border-radius: 0;
                &-item {
                    border-bottom: none;
                    margin-block-end: 20px;
                    border: none;
                    border-top: 0 !important;
                    border-bottom: 1px solid #ebebeb;
                    background-color: transparent;
                }
                &-header {
                    padding: 0;
                    border-bottom: 0;
                    background-color: transparent;
                }
                &-button {
                    font-weight: 800;
                    font-size: 18px;
                    border: none;
                    width: 100%;
                    text-align: left;
                    color: ${themeGet("colors.primary")};

                    padding: 20px 25px;
                    position: relative;
                    overflow-wrap: break-word;
                    white-space: normal;
                    line-height: 1.2;
                    font-weight: 700;
                    background-color: transparent;
                    position: relative;
                    box-shadow: none;
                    ${device.small} {
                        font-size: 20px;
                    }
                    ${device.medium} {
                        font-size: 24px;
                        padding: 20px 35px;
                    }
                    &:hover {
                        background-color: transparent;
                    }
                    .fa-chevron-right {
                        position: absolute;
                    }
                    &:before {
                        position: absolute;
                        content: "\f054";
                        font-family: "Font Awesome 5 Pro";
                        font-size: 18px;
                        left: 2px;
                        margin-top: 2px;
                        transform: rotate(90deg);
                    }
                    &:after {
                        display: none;
                    }
                    &.collapsed {
                        color: ${themeGet("colors.silver")};
                        &:before {
                            transform: rotate(0);
                        }
                    }
                }
                &-body {
                    padding: 0px 25px 29px;
                    ${device.small} {
                        padding: 0px 30px 29px;
                    }
                }
            }
        `}
`;
