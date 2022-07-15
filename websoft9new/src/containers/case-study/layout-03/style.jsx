import styled, { device } from "@styled";

export const CaseStudyWrapper = styled.section`
    padding-block-start: 53px;
    padding-block-end: 30px;
    ${device.medium} {
        padding-block-start: 72px;
        padding-block-end: 50px;
    }
    ${device.large} {
        padding-block-start: 89px;
        padding-block-end: 70px;
    }
`;
