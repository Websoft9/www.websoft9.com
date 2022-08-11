import styled, { device, themeGet } from "@styled";
import { Input } from "@ui/form-elements";

export const HeaderFormWrap = styled.div`
    height: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    background: transparent;
    position: relative;
    ${device.medium} {
        max-width: 200px;
    }
    ${device.xlarge} {
        max-width: 170px;
    }
    ${device.xxlarge} {
        max-width: 225px;
    }
`;

export const StyledInput = styled(Input)`
    border-radius: 0;
    border-color: transparent;
    min-height: 40px;
    padding-right: 50px;
    padding-left: 10px;
    color: ${themeGet("colors.heading")};
    background-color: ${themeGet("colors.gray.400")};
    &:focus {
        background-color: ${themeGet("colors.gray.400")};
    }
    ${device.medium} {
        background-color: transparent;
        &:focus {
            background-color: transparent;
        }
    }

    ${device.small} {
        input {
            min-height: 60px;
        }
    }

    &:hover,
    &:focus {
        color: ${themeGet("colors.heading")};
    }
    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${themeGet("colors.heading")};
    }
    &:-ms-input-placeholder {
        color: ${themeGet("colors.heading")};
    }
`;

export const ButtonWrap = styled.div`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    @media ${device.xsmall} {
        right: 5px;
    }
`;
