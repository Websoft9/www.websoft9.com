import styled, {
    createGlobalStyle,
    css,
    keyframes,
    ThemeProvider,
} from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const breakpoints = [
    "576px",
    "768px",
    "992px",
    "1200px",
    "1600px",
    "1700px",
];

export const device = {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
    xlarge: `@media screen and (min-width: ${breakpoints[3]})`,
    xxlarge: `@media screen and (min-width: ${breakpoints[4]})`,
    xxxlarge: `@media screen and (min-width: ${breakpoints[5]})`,
};

export const SectionWrap = styled.div`
    padding-block-start: 55px;
    padding-block-end: 17px;
    ${device.medium} {
        padding-block-start: 74px;
        padding-block-end: 16px;
    }
    ${device.large} {
        padding-block-start: 94px;
        padding-block-end: 86px;
    }
`;

export { createGlobalStyle, css, keyframes, ThemeProvider, themeGet };
export * from "styled-system";
export default styled;


