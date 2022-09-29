import styled, { css, device } from "@styled";

export const DropdownItemWrap = styled.li`
    position: relative;
    line-height: 1;
    cursor: pointer;
    ${(props) =>
        props.active &&
        css`
            padding: 0 5px;
            ${device.xxlarge} {
                padding: 0 10px;
            }
            &:after {
                position: absolute;
                content: "";
                left: 0;
                bottom: -50px;
                width: 100%;
                height: 50px;
            }
        `}
    &:hover {
        & > ul {
            opacity: 1;
            visibility: visible;
            transform: translateY(10px);
        }
    }
`;
