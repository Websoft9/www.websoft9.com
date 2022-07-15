import styled, { themeGet, device } from "@styled";

export const SectionWrap = styled.section`
    padding-block-start: 60px;
    margin-block-end: 60px;
    ${device.medium} {
        padding-block-start: 80px;
        margin-block-end: 60px;
    }
    ${device.large} {
        padding-block-start: 100px;
        margin-block-end: 20px;
    }
`;

export const CaseInfo = styled.div`
    margin-block-start: 0;
    ${device.large} {
        margin-block-start: 30px;
    }
`;

export const CaseTitle = styled.h4`
    margin-block-end: 10px;
    font-weight: 500;
`;

export const CaseCat = styled.p`
    color: ${themeGet("colors.primary")};
`;

export const CaseText = styled.p`
    font-size: 18px;
    line-height: 1.67;
`;

export const CaseImage = styled.figure``;
