import styled, { typography, space } from "@styled";

export const StyleFormGroup = styled("div").withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        ![
            "p",
            "pl",
            "pr",
            "pt",
            "pb",
            "px",
            "m",
            "ml",
            "mr",
            "mt",
            "mb",
            "mx",
            "fontSize",
            "textAlign",
        ].includes(prop) && defaultValidatorFn(prop),
})`
    ${typography};
    ${space};
`;
