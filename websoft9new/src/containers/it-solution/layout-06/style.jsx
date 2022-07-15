import styled, { device, css } from "@styled";

export const SectionWrap = styled.div`
    ${({ $space }) =>
        $space === 1 &&
        css`
            padding-block-end: 60px;
            ${device.medium} {
                padding-block-end: 80px;
            }
            ${device.large} {
                padding-block-end: 100px;
            }
        `}
    ${({ $space }) =>
        $space === 2 &&
        css`
            padding-block: 60px;
            ${device.medium} {
                padding-block: 80px;
            }
            ${device.large} {
                padding-block: 100px;
            }
        `}
    .box-item {
        margin-block-end: 50px;
    }
`;
