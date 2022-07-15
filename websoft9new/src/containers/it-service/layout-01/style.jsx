import styled, { device, css } from "@styled";

export const SectionWrap = styled.section`
    position: relative;
    z-index: 1;
    ${({ $space }) =>
        $space === 1 &&
        css`
            padding-block-start: 54px;
            ${device.medium} {
                padding-block-start: 75px;
            }
            ${device.large} {
                padding-block-start: 100px;
            }
        `}
    ${({ $space }) =>
        $space === 2 &&
        css`
            padding-block-end: 50px;
            ${device.medium} {
                padding-block-end: 80px;
            }
            ${device.large} {
                padding-block-end: 100px;
            }
        `}

    .box-item {
        margin-block-start: 41px;
        ${device.medium} {
            margin-block-start: 55px;
        }
    }
`;
