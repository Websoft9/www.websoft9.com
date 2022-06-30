import styled from "@styled";
import tinycolor from "tinycolor2";

export const StyledWrap = styled.div`
    padding: 55px 24px 30px;
    border-radius: 5px;
    background: ${({ $color }) => $color};
    position: relative;
    z-index: 1;
    height: 100%;
    &:before {
        counter-increment: claim;
        content: counter(claim, decimal-leading-zero);
        color: ${({ $color }) => tinycolor($color).darken(26.9).toString()};
        font-size: 18px;
        font-weight: 700;
        position: absolute;
        top: 19px;
        left: 24px;
    }
    .icon {
        color: ${({ $color }) => tinycolor($color).darken(10).toString()};
    }
`;

export const StyledIcon = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 48px;
    margin: 0;
    flex-shrink: 0;
    line-height: 1;
    z-index: -1;
`;

export const StyledHeading = styled.h4`
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 24px;
`;
