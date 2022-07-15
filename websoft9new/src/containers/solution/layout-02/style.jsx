import styled, { device, themeGet } from "@styled";

export const ProblemArea = styled.section`
    padding-block-start: 30px;
    ${device.medium} {
        padding-block-start: 47px;
    }
    ${device.large} {
        padding-block-start: 87px;
    }
`;

export const ProblemBox = styled.div`
    border-bottom: 1px solid ${themeGet("colors.gray.400")};
    padding-block-end: 30px;
    margin-block-end: 24px;
    ${device.large} {
        padding-block-end: 50px;
        margin-block-end: 44px;
    }
    &:last-of-type {
        margin-block-end: 0;
        ${device.large} {
            margin-block-end: 0;
        }
    }
`;

export const ProblemTextBox = styled.div`
    display: flex;
    i {
        font-size: 18px;
        font-weight: 400;
        padding-inline-end: 15px;
        margin-block-start: 5px;
        color: rgb(8, 106, 216);
    }
`;

export const StyledProblemTitle = styled.h6`
    position: relative;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.74;
    margin-block-end: 20px;
`;
