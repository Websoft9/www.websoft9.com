import styled, { css, themeGet } from "@styled";

export const ScrollTopButton = styled.button`
    position: fixed;
    right: 30px;
    bottom: -60px;
    z-index: 999;
    box-shadow: 0 30px 50px rgba(0, 0, 0, 0.03);
    display: block;
    padding: 0;
    border: none;
    width: 60px;
    height: 60px;
    border-radius: ${themeGet("radii.round")};
    text-align: center;
    font-size: 25px;
    line-height: 60px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    background-color: ${themeGet("colors.primary")};
    color: #ffffff;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    overflow: hidden;
    ${(props) =>
        props.isStick &&
        css`
            bottom: 60px;
            opacity: 1;
            visibility: visible;
        `}
    .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        color: #ffffff;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        font-size: 25px;
        &.arrow {
            &-up {
                transform: translate(-50%, -50%);
            }
            &-bottom {
                transform: translate(-50%, 80px);
            }
        }
    }
    &:hover {
        .icon {
            &.arrow {
                &-up {
                    transform: translate(-50%, -80px);
                }
                &-bottom {
                    transform: translate(-50%, -50%);
                }
            }
        }
    }
`;
