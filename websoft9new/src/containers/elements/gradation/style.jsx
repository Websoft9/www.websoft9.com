import styled, { device } from "@styled";
import { themeGet } from "@styled-system/theme-get";

export const SectitonWrap = styled.section`
    padding-block-start: 60px;
    padding-block-end: 0;
    ${device.medium} {
        padding-block-start: 80px;
        padding-block-end: 21px;
    }
    ${device.large} {
        padding-block-start: 100px;
        padding-block-end: 91px;
    }
`;

export const GradationRow = styled.div`
    display: block;
    margin-inline-start: -15px;
    margin-inline-end: -15px;
    ${device.large} {
        display: flex;
    }
`;

export const SectionTitleWrap = styled.div`
    margin-block-end: 30px;
    ${device.medium} {
        margin-block-end: 53px;
    }
`;

export const StepWrap = styled.div`
    text-align: start;
    margin-block-end: 42px;
    ${device.medium} {
        text-align: end;
        margin-block-end: 0;
    }
    h3 {
        position: relative;
        font-size: 13px;
        line-height: 2em;
        letter-spacing: 2px;
        text-transform: uppercase;
        display: inline-block;
        padding-block: 35px;
        padding-inline-start: 42px;
        padding-inline-end: 80px;
        z-index: 1;
        mark {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translate(0, -50%);
            font-size: 120px;
            line-height: 0.8;
            font-weight: 900;
            color: #ededed;
            z-index: -1;
        }
        &:before {
            background-color: ${themeGet("colors.primary")};
            content: "";
            position: absolute;
            top: 47px;
            left: 0;
            width: 34px;
            height: 1px;
        }
    }
`;

export const StyledTitle = styled.h4`
    span {
        color: ${themeGet("colors.primary")};
    }
`;

export const StyledSubtitle = styled.h6`
    color: #333;
    font-size: 14px;
    letter-spacing: 3px;
    text-transform: uppercase;
    line-height: 1.43;
    margin-block-start: -5px;
    margin-block-end: 20px;
`;
