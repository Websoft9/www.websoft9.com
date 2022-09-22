import styled, { css, device, themeGet } from "@styled";
import { Input } from "@ui/form-elements";
import Button from "@ui/button";

export const StyledForm = styled.form`
    position: relative;
    background-color: rgba(0, 47, 166, 0.3);
    height: 100%;
    width: 100%;
    display: flex;
    margin-inline-start: auto;
    align-items: center;

    ${device.medium} {
        width: 270px;
    }

    ${(props) =>
        props.layout === "white" &&
        css`
            border-left: 1px solid ${themeGet("colors.borderDash")};
            border-right: 1px solid ${themeGet("colors.borderDash")};
            background-color: transparent;
            input {
                background: transparent;
                color: #000;
                &:hover,
                &:focus {
                    background: transparent !important;
                    color: #000 !important;
                }
                &::placeholder,
                &::-webkit-input-placeholder {
                    color: #000 !important;
                }
                &:-ms-input-placeholder {
                    color: #000 !important;
                }
            }
            button {
                color: #000;
                &:hover {
                    color: #000;
                }
            }
        `}
`;

export const StyledInput = styled(Input)`
    background-color: transparent;
    border-radius: 0;
    min-height: 60px;
    padding-right: 50px;
    padding-left: 10px;
    color: #fff;
    border: none;
    &:hover,
    &:focus {
        color: #fff;
        background-color: transparent;
    }
    &::placeholder,
    &::-webkit-input-placeholder {
        color: #fff;
    }
    &:-ms-input-placeholder {
        color: #fff;
    }
`;

export const StyledButton = styled(Button)`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
`;
