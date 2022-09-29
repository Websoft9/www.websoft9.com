import styled, { css, themeGet, device } from "@styled";
import Tabs from "react-bootstrap/Tabs";

export const StyledTabs = styled(Tabs)`
    ${({ $layout }) =>
        $layout === 1 &&
        css`
            &.nav {
                &-tabs {
                    width: 100%;
                    justify-content: center;
                    border: none;
                    gap: 10px;
                    ${device.medium} {
                        gap: 20px;
                    }
                }
            }
            .nav {
                &-item {
                    flex: 1 0 auto;
                }
                &-link {
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 1.3;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    border: 1px solid ${themeGet("colors.border")}; !important;
                    color: ${themeGet("colors.text")}; !important;
                    background-color: #fff;
                    border-radius: ${themeGet("radii.md")}; !important;
                    display: block;
                    width: 100%;
                    padding: 12px 13px;
                    ${device.large} {
                        padding: 21px 20px 19px;
                    }

                    &.active {
                        color: ${themeGet("colors.primary")} !important;
                        border-color: ${themeGet("colors.primary")} !important;
                    }
                }
            }
        `}
    ${({ $layout }) =>
        $layout === 2 &&
        css`
            &.nav {
                &-tabs {
                    border: none;
                    justify-content: center;
                }
            }
            .nav {
                &-item {
                    min-width: 160px;
                    max-width: 220px;
                    flex: 1 0 auto;
                    &:first-child {
                        .nav-link {
                            border-top-left-radius: 5px !important;
                            border-bottom-left-radius: 5px !important;
                        }
                    }
                    &:last-child {
                        .nav-link {
                            border-top-right-radius: 5px !important;
                            border-bottom-right-radius: 5px !important;
                        }
                    }
                }
                &-link {
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 1.25;
                    border: 1px solid ${themeGet("colors.border")};
                    background: #fff;
                    color: #454545;
                    padding: 18px 10px 16px;
                    border-radius: 0;
                    text-align: center;
                    width: 100%;
                    &.active {
                        color: #fff;
                        background-color: ${themeGet("colors.primary")};
                        border-color: ${themeGet("colors.primary")} !important;
                    }
                }
            }
        `}
`;
