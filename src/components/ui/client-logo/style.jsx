import styled, { css } from "styled-components";

export const BrandLogoWrap = styled.div`
    position: relative;
    a {
        display: block;
        text-align: center;
    }
    .brand-logo__image {
        transition: all 0.4s linear;
    }
    ${(props) =>
        props.$layout === 1 &&
        css`
            .brand-logo__image {
                &-hover {
                    visibility: hidden;
                    opacity: 0;
                    transform: scale(0.8, 0.8);
                    transition: all 0.4s linear;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                }
            }
            &:hover {
                .brand-logo__image {
                    visibility: hidden;
                    opacity: 0;
                    transform: scale(0.8, 0.8);
                    &-hover {
                        opacity: 1;
                        visibility: visible;
                        transform: none;
                    }
                }
            }
        `}

    ${(props) =>
        props.$layout === 2 &&
        css`
            .brand-logo__image {
                &-hover {
                    visibility: hidden;
                    opacity: 0;
                    transform: translate(-50%, 20px);
                    transition: all 0.4s linear;
                    position: absolute;
                    top: 0;
                    left: 50%;
                    width: 100%;
                }
            }
            &:hover {
                .brand-logo__image {
                    visibility: hidden;
                    opacity: 0;
                    transform: translateY(-20px);
                    &-hover {
                        visibility: visible;
                        opacity: 1;
                        transform: translate(-50%, 0);
                    }
                }
            }
        `}

    ${(props) =>
        props.$layout === 3 &&
        css`
            .brand-logo__image {
                opacity: 0.4;
                &:hover {
                    opacity: 1;
                }
            }
        `}
    
    ${(props) =>
        props.$layout === 4 &&
        css`
            .brand-logo__image {
                opacity: 1;
                &:hover {
                    opacity: 0.4;
                }
            }
        `}
`;
