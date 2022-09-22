import styled, { css, space, themeGet } from "@styled";
import { separatorBounce } from "@assets/css/animations";

export const DotsWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${space};
`;

export const Dot = styled.div`
    border-radius: ${themeGet("radii.round")};
    box-shadow: 0 0 12px #def0ff;
    background: #000;
    background-color: ${themeGet("colors.primary")};
    animation: ${separatorBounce} 1.4s ease-in-out 0s infinite both;
    width: 14px;
    height: 14px;
    ${(props) =>
        props.serial === "second" &&
        css`
            margin-block-start: 18px;
            animation-delay: -0.16s;
        `}
    ${(props) =>
        props.serial === "third" &&
        css`
            margin-block-start: 14px;
            animation-delay: -0.32s;
        `}
`;
