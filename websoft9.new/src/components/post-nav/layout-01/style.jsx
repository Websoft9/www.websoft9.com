import styled, { css, device, themeGet } from "@styled";

export const NavItem = styled.div`
    ${(props) =>
        props.rel === "prev" &&
        css`
            text-align: start;
            margin-inline-end: auto;
        `}
    ${(props) =>
        props.rel === "next" &&
        css`
            text-align: end;
            margin-inline-start: auto;
        `}
`;

export const NavInner = styled.div`
    display: flex;
    align-items: center;
    min-height: 150px;
    padding-block: 20px;
    ${device.large} {
        min-height: 190px;
    }
    .gatsby-image-wrapper {
        border-radius: ${themeGet("radii.md")};
    }
    i {
        font-size: 20px;
        font-weight: 400;
    }
    ${(props) =>
        props.rel === "next" &&
        css`
            .gatsby-image-wrapper {
                margin-inline-start: 28px;
                margin-inline-end: 30px;
            }
        `}
    ${(props) =>
        props.rel === "prev" &&
        css`
            flex-direction: row-reverse;
            .gatsby-image-wrapper {
                margin-inline-end: 28px;
                margin-inline-start: 30px;
            }
            .icon {
                transform: rotate(180deg);
            }
        `}
`;
