import styled, { device, color } from "@styled";

export const ServicesWrapper = styled.section`
    padding-block-start: 60px;
    padding-block-end: 50px;
    ${device.medium} {
        padding-block-start: 80px;
        padding-block-end: 70px;
    }
    ${device.large} {
        padding-block-start: 100px;
        padding-block-end: 90px;
    }
    ${color}
`;

export const SectionBottom = styled.div`
    margin-block-start: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${device.small} {
        flex-direction: row;
    }
`;
