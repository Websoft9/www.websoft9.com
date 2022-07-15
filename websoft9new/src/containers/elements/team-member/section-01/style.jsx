import styled, { device } from "@styled";

export const TeamWrapper = styled.section`
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

export const SectionTitle = styled.div`
    margin-block-end: 50px;
    ${device.large} {
        margin-block-end: 60px;
    }
`;

export const ButtonWrap = styled.div`
    margin-block-start: 30px;
`;
