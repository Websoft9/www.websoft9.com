import styled, { themeGet } from "@styled";

export const BlogBox = styled.div`
    padding-block-end: 50px;
    margin-block-end: 50px;
    border-block-end: 1px solid ${themeGet("colors.border")};
    &:last-of-type {
        margin-block-end: 0;
    }
`;
