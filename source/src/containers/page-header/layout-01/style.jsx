import styled, { device } from "@styled";

export const PageHeaderWrap = styled.div`
    position: relative;
    isolation: isolate;
    padding-block-start: 60px;
    padding-block-end: 60px;
    ${device.medium} {
        padding-block-start: 100px;
        padding-block-end: 100px;
    }
    ${device.large} {
        padding-block-start: 192px;
        padding-block-end: 165px;
    }
`;

export const StyledBG = styled.div`
    position: absolute;
    inset: 0;
    z-index: -1;
    & > div {
        height: 100%;
        width: 100%;
    }
    & >img {
        width:1920px;
        height:507px;
        object-fit:cover;
    }
`;

export const StyledTitle = styled.h1`
    color: #fff;
    margin-block-end: 15px;
`;

export const StyledDesc = styled.h5`
    color: #fff;
    font-weight: 400;
`;
