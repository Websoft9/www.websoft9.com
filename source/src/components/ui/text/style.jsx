import styled, { typography, space, color, layout } from "@styled";
import { allowedTags } from "@utils";

export const StyledText = styled("p").withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        ![...allowedTags].includes(prop) && defaultValidatorFn(prop),
})`
    ${typography};
    ${space};
    ${color};
    ${layout};
`;
