import styled, { themeGet } from "@styled";
import Anchor from "@ui/anchor";

export const BoxLargeImgInner = styled.div`
    transition: ${themeGet("transition")};
`;

export const BoxLargeImgMedia = styled.div`
    position: relative;
    border-radius: ${themeGet("radii.md")};
    overflow: hidden;
    text-align: center;
    img {
        width: 100%;
        transition: transform 1s;
    }
    &:after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 1;
        opacity: 0.5;
        background-image: linear-gradient(
            -180deg,
            transparent 39%,
            #1c0f69 100%
        );
    }
`;

export const BoxLargeImgBtnWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${themeGet("radii.md")};
    overflow: hidden;
    z-index: 3;
`;

export const BoxLargeImgBtnInner = styled.div`
    background: #fff;
    color: ${themeGet("colors.primary")};
    transform: translateY(100%);
    opacity: 0;
    transition: all 0.4s ease-in-out;
`;

export const BoxLargeImgHeading = styled.div`
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    width: 250px;
    margin: 0 auto;
    z-index: 2;
    overflow: hidden;
    transition: ${themeGet("transition")};
`;

export const BoxLargeImgContent = styled.div`
    margin-block-start: 30px;
`;

export const HeadingWrap = styled.h5`
    font-size: 24px;
    line-height: 1.5;
    color: #fff;
    font-weight: 500;
`;

export const TextWrap = styled.p`
    color: ${themeGet("colors.gray.700")};
    text-align: center;
`;

export const BoxLargeImgLink = styled(Anchor)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    z-index: 2;
    text-indent: -999999px;
`;

export const BoxLargeImgWrap = styled.div`
    max-width: 370px;
    margin-inline: auto;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    ${BoxLargeImgInner} {
        height: 100%;
    }
    &:hover {
        ${BoxLargeImgInner} {
            transform: translateY(-5px);
        }
        ${BoxLargeImgMedia} {
            &:after {
                background: ${themeGet("colors.primary")};
                opacity: 0.8;
            }
        }
        ${BoxLargeImgBtnInner} {
            transform: translateY(0);
            opacity: 1;
        }
        ${BoxLargeImgHeading} {
            transform: translateY(-100%);
            opacity: 0;
        }
        ${BoxLargeImgLink} {
            opacity: 1;
            visibility: visible;
        }
    }
`;
