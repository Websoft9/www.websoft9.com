import styled, { css, device } from "@styled";

export const SectionWrap = styled.div`
    padding-block-start: 60px;
    padding-block-end: 55px;
    ${device.medium} {
        padding-block-start: 80px;
        padding-block-end: 75px;
    }
    ${device.large} {
        padding-block-start: 100px;
        padding-block-end: 95px;
    }
`;

export const FeatureListProgressWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    ${(props) =>
        props.position === "left" &&
        css`
            margin-block-end: 50px;
            ${device.large} {
                margin-block-end: 0px;
            }
        `}
`;

export const ProgressCircleWrap = styled.div`
    max-width: 100%;
    flex-basis: 100%;
    ${device.small} {
        max-width: 170px;
        flex-basis: 170px;
    }
`;

export const FeatureList = styled.div`
    max-width: 100%;
    flex-basis: 100%;
    margin-block-start: 20px;
    ${device.small} {
        max-width: calc(100% - 170px);
        flex-basis: calc(100% - 170px);
        padding-inline-start: 40px;
        margin-block-start: 0;
    }
    h6 {
        margin-block-end: 20px;
    }
    ul {
        li:not(:last-child) {
            margin-block-end: 10px;
        }
    }
`;
