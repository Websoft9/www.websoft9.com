import styled, { device } from "@styled";

export const StyledSection = styled.div`
    margin-block-start: 60px;
    ${device.medium} {
        margin-block-start: 70px;
    }
`;
