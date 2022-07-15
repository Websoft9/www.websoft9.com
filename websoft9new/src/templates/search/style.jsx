import styled, { themeGet, device } from "@styled";

export const BlogListWrapper = styled.section`
    padding-block-start: 53px;
    padding-block-end: 60px;
    ${device.medium} {
        padding-block-start: 72px;
        padding-block-end: 80px;
    }
    ${device.large} {
        padding-block-start: 89px;
        padding-block-end: 100px;
    }
`;

export const BlogBoxWrapper = styled.div``;

export const BlogBox = styled.div`
    padding-block-end: 50px;
    margin-block-end: 50px;
    border-bottom: 1px solid ${themeGet("colors.border")};
`;

export const SearchInfoHeader = styled.div`
    text-align: center;
    margin-block-end: 50px;
    ${device.large} {
        margin-block-end: 70px;
    }
`;

export const StyledHeading = styled.h3`
    span {
        color: ${themeGet("colors.primary")};
    }
`;

export const SearchError = styled.div`
    text-align: center;
    h2 {
        font-size: 50px;
        ${device.large} {
            font-size: 60px;
        }
    }
`;

export const StyledSidebar = styled.aside`
    padding-inline-end: 30px;
    padding-block-start: 45px;
    ${device.large} {
        margin-block-start: 0;
    }
`;
