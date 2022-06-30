import styled, { device } from "@styled";

export const StyledSection = styled.section`
    padding-block-end: 60px;
    ${device.medium} {
        padding-block-end: 80px;
    }
    ${device.large} {
        padding-block-end: 100px;
    }
`;

export const StyledCta = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 58px 40px;
    border-radius: 5px;
    background-color: #f6f2ed;
    position: relative;
    overflow: hidden;
    isolation: isolate;
    .bg-shape {
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
    }
    ${device.medium} {
        margin-block-start: 0;
        padding: 58px 80px;
        flex-direction: row;
    }
`;

export const StyledMarkHeading = styled.h2`
    text-transform: uppercase;
    position: relative;
    font-size: 12px;
    line-height: 2em;
    letter-spacing: 2px;
    color: #ababab;
    span {
        font-size: 180px;
        line-height: 0.8;
        font-weight: 900;
        margin: 0 5px -5px -5px;
        color: #d2a98e;
    }
`;

export const StyledHeading = styled.h4`
    margin-block-end: 20px;
    font-size: 20px;
    br {
        display: none;
    }
    ${device.large} {
        font-size: 31px;
        br {
            display: block;
        }
    }
`;
