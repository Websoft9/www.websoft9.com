import styled, { device, themeGet } from "@styled";

export const ClientsWrap = styled.div`
    overflow: hidden;
`;

export const ClientsSecInner = styled.div`
    background: #f6fafe;
    padding-block-start: 150px;
    padding-block-end: 150px;

    ${device.medium} {
        padding-block-start: 230px;
        padding-block-end: 230px;
        margin-block-end: 40px;
        margin-block-start: 40px;
    }
`;

export const ClientContent = styled.div`
    text-align: center;
    position: relative;
    z-index: 4;
`;

export const ClinetImages = styled.div`
    .redrow-img {
        width: 100px;
        ${device.medium} {
            width: 230px;
        }
        a {
            display: block;
        }
    }
    .redrow-1 {
        overflow: hidden;
        position: absolute;
        left: 10%;
        top: -70%;
        ${device.small} {
            top: -150%;
        }
        ${device.medium} {
            top: -205%;
        }
    }
    .redrow-2 {
        position: absolute;
        left: 40%;
        top: -80%;
        ${device.medium} {
            top: -150%;
        }
    }
    .redrow-3 {
        position: absolute;
        top: -70%;
        right: 0;
        ${device.small} {
            top: -150%;
        }
        ${device.medium} {
            top: -205%;
        }
    }
    .redrow-4 {
        top: 0%;
        position: absolute;
        left: -10%;
    }
    .redrow-5 {
        position: absolute;
        left: 20%;
        top: 110%;
        ${device.medium} {
            top: 150%;
        }
    }
    .redrow-6 {
        position: absolute;
        right: 20%;
        top: 110%;
        ${device.medium} {
            top: 150%;
        }
    }
    .redrow-7 {
        top: 0%;
        position: absolute;
        right: -10%;
    }
`;

export const StyledHeading = styled.h3`
    font-weight: 500 span {
        color: ${themeGet("colors.primary")};
    }
`;
