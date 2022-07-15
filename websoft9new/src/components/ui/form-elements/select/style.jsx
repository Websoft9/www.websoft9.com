import styled, { themeGet } from "@styled";
import { allowedTags } from "@utils";
import selectIcon from "@assets/images/icons/selector-icon.png";
import {
    InputStyles,
    SuccessInputStyles,
    WarningInputStyles,
    ErrorInputStyles,
} from "../style";

export const StyledSelect = styled("select").withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        ![...allowedTags].includes(prop) && defaultValidatorFn(prop),
})`
    border-color: ${themeGet("colors.border")};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: ${(props) => props.bgcolor || "#f8f8f8"} url(${selectIcon})
        no-repeat center right 20px;
    ${InputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "success" &&
        !!$showState &&
        !$showErrorOnly &&
        SuccessInputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "warning" &&
        !!$showState &&
        !$showErrorOnly &&
        WarningInputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "error" &&
        !!$showState &&
        !!$showErrorOnly &&
        ErrorInputStyles};
`;
