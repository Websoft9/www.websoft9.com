import styled, { themeGet, css, device } from "@styled";

export const OverviewArea = styled.section`
    padding-block-start: 60px;
    ${device.medium} {
        padding-block-start: 71px;
    }
    ${device.large} {
        padding-block-start: 91px;
    }
`;

export const ClientBox = styled.div`
    margin-block: 20px;
    ${device.large} {
        margin-block-start: 40px;
        margin-block-end: 0;
    }
    ${device.xlarge} {
        margin-block-start: 60px;
    }
`;

export const StyledClientName = styled.h6`
    font-weight: 500;
    margin-block-end: 0.25rem;
`;

export const MetaBox = styled.div`
    margin-block-start: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${themeGet("colors.border")};
    padding-block-start: 16px;
    padding-block-end: 16px;
    ${(props) =>
        props.boxtype === "share-box" &&
        css`
            border-bottom: none;
            margin-block-start: 0;
        `}
    ${device.large} {
        margin-block-start: 40px;
    }
    ${device.xlarge} {
        margin-block-start: 60px;
    }
`;

export const StyledIntroHeading = styled.h5`
    font-size: 25px;
    font-weight: 400;
    color: #002fa6;
    ${device.medium} {
        font-size: 28px;
        line-height: 1.43;
    }
`;

export const StyledMetaTitle = styled.h4`
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1px;
    color: ${themeGet("colors.heading")};
`;
