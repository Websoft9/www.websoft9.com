import styled, { device } from "@styled";

export const TestimonialWrapper = styled.section`
    padding-block-start: 60px;
    padding-block-end: 60px;
    background-color: #f8f8f8;
    ${device.medium} {
        padding-block-start: 80px;
        padding-block-end: 80px;
    }
    ${device.large} {
        padding-block-start: 100px;
        padding-block-end: 100px;
    }
`;
