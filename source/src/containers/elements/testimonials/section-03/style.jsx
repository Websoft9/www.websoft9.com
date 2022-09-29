import styled, { device } from "@styled";

export const SectionWrap = styled.div`
    background-color: #f6f2ed;
    padding-block: 60px;
    padding-inline: 15px;
    ${device.medium} {
        padding-block: 80px;
        padding-inline: 25px;
    }
    ${device.large} {
        padding-block: 120px;
        padding-inline: 65px;
    }
`;
