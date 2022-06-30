import styled, { css, themeGet } from "@styled";

export const NavItem = styled.div`
    position: relative;
    min-height: 120px;
    width: 100%;
    height: 100%;
    isolation: isolate;
    z-index: 1;
    border-radius: ${themeGet("radii.md")};
    a {
        display: block;
    }
    .gatsby-image-wrapper {
        min-height: 120px;
        border-radius: ${themeGet("radii.md")};
    }
    &:before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: linear-gradient(
            -180deg,
            rgba(51, 51, 51, 0) 0%,
            #000 80%
        );
        border-radius: ${themeGet("radii.md")};
        opacity: 0.5;
        z-index: 1;
    }
`;

export const NavInner = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${(props) =>
        props.rel === "next" &&
        css`
            padding-inline-end: 20px;
            h6 {
                padding-inline-end: 25px;
                padding-inline-start: 20px;
            }
        `}
    ${(props) =>
        props.rel === "prev" &&
        css`
            flex-direction: row-reverse;
            padding-inline-start: 20px;
            h6 {
                padding-inline-start: 25px;
                padding-inline-end: 20px;
            }
            .icon {
                transform: rotate(180deg);
            }
        `}
    h6 {
        position: relative;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.56;
        margin: 0;
        z-index: 1;
    }
    i {
        position: relative;
        font-size: 20px;
        font-weight: 400;
        color: #fff;
        z-index: 1;
    }
`;
