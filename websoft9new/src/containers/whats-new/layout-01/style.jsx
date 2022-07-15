import styled, { device, css } from "@styled";

export const SectionWrap = styled.section`
    ${({ $space }) =>
        $space === 1 &&
        css`
            padding-block-start: 40px;
            padding-block-end: 40px;
            ${device.medium} {
                padding-block-start: 60px;
                padding-block-end: 60px;
            }
            ${device.large} {
                padding-block-start: 80px;
                padding-block-end: 80px;
            }
        `}
    ${({ $space }) =>
        $space === 2 &&
        css`
            padding-block-end: 40px;
            ${device.medium} {
                padding-block-end: 55px;
            }
            ${device.large} {
                padding-block-end: 65px;
            }
        `}
`;
