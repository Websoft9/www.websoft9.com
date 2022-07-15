import styled, { themeGet, device } from "@styled";

export const BlogWrap = styled.section`
    padding-block-start: 60px;
    padding-block-end: 60px;
    ${device.medium} {
        padding-block-start: 80px;
        padding-block-end: 80px;
    }
    ${device.large} {
        padding-block-start: 100px;
        padding-block-end: 100px;
    }
`;

export const BlogListItem = styled.div`
    padding: 20px 0;
`;

export const BlogList = styled.div`
    border-inline-start: 1px solid ${themeGet("colors.border")};
    padding-inline-start: 30px;
    margin-block-start: 40px;
    ${device.large} {
        margin-block-start: 0;
    }
    ${BlogListItem} {
        &:nth-child(2) {
            border-block-start: 1px solid ${themeGet("colors.border")};
            border-block-end: 1px solid ${themeGet("colors.border")};
        }
    }
`;
