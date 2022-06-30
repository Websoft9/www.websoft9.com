import styled, { themeGet } from "@styled";
import Anchor from "@ui/anchor";

export const StyledTags = styled.div`
    margin: -5px;
`;

export const StyledTag = styled(Anchor)`
    font-weight: 500;
    border-style: solid;
    border-color: transparent;
    text-align: center;
    border-width: 1px;
    transform: translateY(0px);
    margin: 5px;
    color: rgb(171, 171, 171);
    background: rgb(245, 245, 245);
    height: 32px;
    line-height: 32px;
    font-size: 13px;
    padding: 0px 14px;
    border-radius: ${themeGet("radii.sm")};
    &:hover,
    &:focus {
        background: ${themeGet("colors.primary")};
        color: #fff;
    }
`;
