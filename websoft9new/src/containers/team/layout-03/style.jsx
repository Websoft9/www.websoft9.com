import styled, { device } from "@styled";

export const TeamWrapper = styled.section`
    padding-block-start: 22px;
    ${device.medium} {
        padding-block-start: 46px;
    }
    ${device.large} {
        padding-block-start: 66px;
    }
`;
