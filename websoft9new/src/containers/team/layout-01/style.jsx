import styled, { device } from "@styled";

export const StyledSection = styled.section`
    padding-block-start: 56px;
    padding-block-end: 25px;
    ${device.medium} {
        padding-block-start: 70px;
        padding-block-end: 15px;
    }
    ${device.large} {
        padding-block-start: 100px;
        padding-block-end: 35px;
    }
`;

export const StyledButtonWrap = styled.div`
    margin-block-start: 20px;
    ${device.medium} {
        margin-block-start: 30px;
    }
    .mt-btn {
        margin-right: 15px;
    }
`;
