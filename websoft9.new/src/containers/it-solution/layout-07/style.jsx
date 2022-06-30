import styled, { device } from "@styled";

export const SectionWrap = styled.section`
    padding-block-start: 60px;
    padding-block-end: 60px;
    ${device.medium} {
        padding-block-start: 80px;
        padding-block-end: 80px;
    }
    ${device.large} {
        padding-block-start: 100px;
        padding-block-end: 100px;
    }
`;

export const StyledRow = styled.div`
    display: grid;
    position: relative;
    &:before {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        bottom: 0;
        width: 1px;
        background-image: linear-gradient(
            to bottom,
            #ccc 58.33333%,
            rgba(0, 0, 0, 0) 0%
        );
        background-position: left top;
        background-size: 100% 8px;
        background-repeat: repeat-y;
        z-index: 1;
    }
    &:after {
        position: absolute;
        content: "";
        right: 0;
        left: 0;
        bottom: -1px;
        height: 1px;
        background-image: linear-gradient(
            to right,
            #ccc 58.33333%,
            rgba(0, 0, 0, 0) 0%
        );
        background-position: left bottom;
        background-size: 8px 100%;
        background-repeat: repeat-x;
    }
    ${device.medium} {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    ${device.large} {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
`;
