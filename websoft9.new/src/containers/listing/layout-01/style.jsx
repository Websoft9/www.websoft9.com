import styled, { css, device, themeGet } from "@styled";

export const SectionWrap = styled.section`
    padding-block-start: 53px;
    padding-block-end: 53px;
    ${device.medium} {
        padding-block-start: 72px;
        padding-block-end: 72px;
    }
    ${device.large} {
        padding-block-start: 89px;
        padding-block-end: 89px;
    }
`;

export const JobList = styled.div``;

export const JobItem = styled.div`
    border-radius: ${themeGet("radii.md")};

    padding: 20px 30px 20px;
    ${device.small} {
        padding: 33px 50px 36px;
    }
    ${(props) =>
        !props.isEven &&
        css`
            background: #f6f2ed;
        `}
`;

export const JobTitle = styled.h5``;

export const JobType = styled.p`
    font-size: 16px;
    margin-block-end: 10px;
    display: block;
    ${device.medium} {
        margin-block-start: 12px;
        font-size: 18px;
    }
`;

export const JobDesc = styled.p``;

export const JobButton = styled.div`
    text-align: start;
    margin-block-start: 20px;
    ${device.large} {
        text-align: center;
    }
    .mt-btn {
        border-color: ${themeGet("colors.borderDash")};
    }
`;
