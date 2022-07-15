import styled, { device } from "@styled";

export const ContactInfoWrapper = styled.div`
    padding-block-end: 25px;
    ${device.medium} {
        padding-block-end: 45px;
    }
    ${device.large} {
        padding-block-end: 65px;
    }
`;
