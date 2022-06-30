import styled, { device } from "@styled";

export const StyledSection = styled.div`
    margin-block-start: 0;
    ${device.medium} {
        margin-block-start: 20px;
    }
`;
