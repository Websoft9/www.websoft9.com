import styled, { themeGet, device } from "@styled";

export const SectionWrap = styled.div`
    padding-block-start: 60px;
    padding-block-end: 60px;
    ${device.medium} {
        padding-block-start: 80px;
        padding-block-end: 80px;
    }
    ${device.large} {
        padding-block-start: 120px;
        padding-block-end: 120px;
    }
`;

export const HeaderWrap = styled.div`
    margin-block-end: 20px;
    ${device.large} {
        margin-inline-end: 3rem;
    }
`;

export const StyledHeading = styled.h3`
    margin-block-start: 25px;
    font-size: 24px;
    span {
        color: ${themeGet("colors.primary")};
    }
    ${device.large} {
        font-size: 30px;
    }
    ${device.xlarge} {
        font-size: 38px;
    }
`;

export const StyledMarkHeading = styled.h2`
    position: relative;
    font-size: 12px;
    line-height: 2em;
    letter-spacing: 2px;
    color: #ababab;
    text-transform: uppercase;
    display: flex;
    align-items: flex-end;
    span,
    mark {
        font-size: clamp(140px, 6vw, 180px);
        line-height: 0.8;
        font-weight: 900;
        margin-block-end: -5px;
        margin-inline-start: -5px;
        margin-inline-end: 5px;
        color: ${themeGet("colors.secondary")};
    }
`;
