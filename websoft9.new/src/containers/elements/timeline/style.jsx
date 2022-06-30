import styled, { device } from "@styled";

export const SectionWrap = styled.div`
    padding-block: 60px;
    ${device.medium} {
        padding-block: 80px;
    }
    ${device.large} {
        padding-block: 100px;
    }
`;
