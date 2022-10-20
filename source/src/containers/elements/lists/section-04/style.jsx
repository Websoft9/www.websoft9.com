import styled, { device } from "@styled";

export const SectionWrap = styled.div`
    padding-block-start: 55px;
    padding-block-end: 17px;
    ${device.medium} {
        padding-block-start: 74px;
        padding-block-end: 16px;
    }
    ${device.small} {
        .col-lg-2 {
            position:unset;
        }
    }
    ${device.large} {
        padding-block-start: 94px;
        padding-block-end: 86px;
        .col-lg-2 {
            position:sticky;
            top:120px;
            height:100%;
        }
    }
    .box-item {
        margin-block-end: 40px;
    }
`;

export const BoxWrap = styled.div`
    input {
        margin:0px;
    }
    label {
        margin-left:-20px;
    }
    nav div {
        font-size:16px;
    }
`;
