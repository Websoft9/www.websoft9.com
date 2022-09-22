import styled, { css, space, flexbox } from "@styled";

export const LogoWrapper = styled.div`
    display: flex;
    ${flexbox};
    ${space};
    a {
        img {
            width: 160px;
        }
    }

    ${({ $variant }) =>
        $variant === "white" &&
        css`
            .dark-logo {
                display: none !important;
            }
            .light-logo {
                display: inherit;
            }
        `}
    ${({ $variant }) =>
        $variant === "dark" &&
        css`
            .dark-logo {
                display: inherit;
            }
            .light-logo {
                display: none !important;
            }
        `}
`;
