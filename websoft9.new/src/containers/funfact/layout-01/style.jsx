import styled, { device, themeGet } from "@styled";

export const SectionWrap = styled.section``;

export const GridWrap = styled.div`
    border-inline-end: 1px solid ${themeGet("colors.border")};
    display: flex;
    flex-wrap: wrap;
`;

export const Grid = styled.div`
    max-width: 100%;
    flex-basis: 100%;
    padding-block: 60px;
    padding-inline: 10px;
    position: relative;

    ${device.medium} {
        max-width: 50%;
        flex-basis: 50%;
    }
    ${device.large} {
        max-width: 25%;
        flex-basis: 25%;
    }
    ${device.xlarge} {
        padding-block: 100px;
        padding-inline: 25px;
    }
    &:before,
    &:after {
        position: absolute;
        content: "";
        left: 0;
        background: ${themeGet("colors.border")};
    }
    &:before {
        top: 0;
        bottom: 0;
        width: 1px;
    }
    &:after {
        top: -1px;
        right: 0;
        height: 1px;
    }
`;
