import styled, { device } from "@styled";

export const TeamWrapper = styled.section`
    padding-block-start: 53px;
    ${device.medium} {
        padding-block-start: 72px;
    }
    ${device.large} {
        padding-block-start: 89px;
    }
`;
