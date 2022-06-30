import styled, { device } from "@styled";

export const StyledSection = styled.section`
    padding-block-start: 51px;
    ${device.medium} {
        padding-block-start: 70px;
    }
    ${device.large} {
        padding-block-start: 89px;
    }
`;
