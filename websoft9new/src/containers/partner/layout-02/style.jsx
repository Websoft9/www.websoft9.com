import styled, { device } from "@styled";

export const PartnersWrap = styled.div`
    display: grid;
    grid-row-gap: 60px;
    grid-template-columns: repeat(2, 1fr);
    margin-block-start: 60px;

    ${device.medium} {
        grid-template-columns: repeat(3, 1fr);
    }
    ${device.large} {
        grid-template-columns: repeat(6, 1fr);
        margin-block-start: 70px;
    }
`;

export const BrandLogoWrap = styled.div`
    align-self: center;
    text-align: center;
    position: relative;
`;
