import styled from "@styled";
import { allowedTags } from "@utils";
import {
    InputStyles,
    SuccessInputStyles,
    WarningInputStyles,
    ErrorInputStyles,
} from "../style";

export const StyledInput = styled("input").withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        ![...allowedTags].includes(prop) && defaultValidatorFn(prop),
})`
    ${InputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "success" &&
        $showState &&
        !$showErrorOnly &&
        SuccessInputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "warning" &&
        $showState &&
        !$showErrorOnly &&
        WarningInputStyles};
    ${({ $state, $showState, $showErrorOnly }) =>
        $state === "error" && $showState && $showErrorOnly && ErrorInputStyles};
`;
