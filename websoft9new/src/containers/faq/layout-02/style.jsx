import styled, { device, css } from "@styled";

export const SectionWrap = styled.div`
    ${({ $space }) =>
        $space === 1 &&
        css`
            padding-block-start: 53px;
            padding-block-end: 60px;
            ${device.medium} {
                padding-block-start: 72px;
                padding-block-end: 80px;
            }
            ${device.large} {
                padding-block-start: 89px;
                padding-block-end: 80px;
            }
        `}
    ${({ $space }) =>
        $space === 2 &&
        css`
            padding-block-start: 35px;
            padding-block-end: 60px;
            ${device.medium} {
                padding-block-start: 53px;
                padding-block-end: 75px;
            }
            ${device.large} {
                padding-block-start: 94px;
                padding-block-end: 68px;
            }
        `}
`;
