import styled, { themeGet, device } from "@styled";

export const BoxImgInner = styled.div`
    box-shadow: ${themeGet("shadows.md")};
    background: #ffffff;
    border-radius: ${themeGet("radii.md")};
    padding-block-start: 40px;
    padding-block-end: 53px;
    padding-inline: 25px;
    height: 100%;
    transition: ${themeGet("transition")};
    z-index: 11;
    position: relative;
    ${device.large} {
        padding-block-start: 50px;
        padding-block-end: 63px;
        padding-inline: 30px;
    }
`;

export const BoxImgMedia = styled.figure`
    margin-block-end: 25px;
    position: relative;
    img {
        transition: ${themeGet("transition")};
    }
    ${device.large} {
        margin-block-end: 41px;
    }
`;

export const BoxImgContent = styled.div``;

export const HeadingWrap = styled.h5`
    font-weight: 500;
    line-height: 1.25;
    margin-block-end: 12px;
`;

export const TextWrap = styled.p``;

export const BoxImgWrapper = styled.div`
    margin-block-start: ${(props) => props.mt};
    &:hover {
        ${BoxImgInner} {
            transform: translateY(-5px);
            background: rgb(0, 47, 166);
        }
        ${HeadingWrap},
        ${TextWrap} {
            color: #fff;
        }
        .button {
            color: #fff;
        }
        ${BoxImgMedia} {
            img {
                filter: brightness(0) invert(1);
            }
        }
    }
`;
