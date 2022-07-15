import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const SectionWrap = styled.div`
    padding-block-start: 60px;
    padding-block-end: 60px;
    border-block-end: 1px solid ${themeGet("colors.border")};
`;
