import styled, { device } from "@styled";

export const StyledSection = styled.div`
    padding-block-start: 55px;
    padding-block-end: 45px;
    ${device.medium} {
        padding-block-start: 74px;
        padding-block-end: 64px;
    }
    ${device.large} {
        padding-block-end: 84px;
        padding-block-start: 94px;
    }
`;

export const ButtonGroupWrap = styled.div`
    margin-inline-start: -10px;
    margin-inline-end: -10px;
`;

export const ButtonWrap = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;
