import styled, { device } from "@styled";

export const SectionWrap = styled.div`
    padding-block: 80px;
    .popup-one {
        margin-block-end: 50px;
    }
    ${device.medium} {
        padding-block: 80px;
        .popup-one {
            margin-block-end: 0;
        }
    }
    ${device.large} {
        padding-block: 100px;
    }
`;
