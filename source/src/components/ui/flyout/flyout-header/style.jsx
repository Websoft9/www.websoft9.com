import styled, { space, typography } from "@styled";
import { allowedTags } from "@utils";

export const FlyoutHeaderWrap = styled("div").withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        ![...allowedTags].includes(prop) && defaultValidatorFn(prop),
})`
    background-color: #ffffff;
    padding-block: 15px;
    ${space};
    ${typography}
`;
