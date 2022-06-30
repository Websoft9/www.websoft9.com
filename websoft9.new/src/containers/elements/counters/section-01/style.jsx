import styled, { device, themeGet } from "@styled";

export const SectionWrap = styled.div``;

export const FunFactGridWrap = styled.div`
    border-inline-end: 1px solid #ededed;
    display: flex;
    flex-wrap: wrap;
`;

export const FunFactGrid = styled.div`
    max-width: 100%;
    flex-basis: 100%;
    padding-block-start: 60px;
    padding-block-end: 60px;
    padding-inline-start: 10px;
    padding-inline-end: 10px;
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
        padding-block-start: 100px;
        padding-block-end: 100px;
        padding-inline-start: 25px;
        padding-inline-end: 25px;
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
