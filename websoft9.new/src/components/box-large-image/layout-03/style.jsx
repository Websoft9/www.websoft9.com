import styled, { themeGet, space } from "@styled";
import Anchor from "@ui/anchor";

export const BoxLargeImgInner = styled.div`
    overflow: hidden;
    position: relative;
    height: 100%;
    ${space};
`;

export const BoxLargeImgMedia = styled.div`
    position: relative;
    transition: ${themeGet("transition")};
    img {
        width: 100%;
    }
`;

export const BoxLargeImgContent = styled.div`
    padding-block-start: 32px;
    padding-block-end: 0;
    padding-inline: 35px;
    text-align: center;
`;

export const HeadingWrap = styled.h5`
    font-weight: 500;
    line-height: 1.25;
    margin-block-end: 12px;
`;

export const TextWrap = styled.p`
    color: ${themeGet("colors.text")};
`;

export const BoxLargeImgBtnWrap = styled.div``;

export const BoxLargeImgLink = styled(Anchor)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    opacity: 0;
    text-indent: -999999px;
`;

export const BoxLargeImgWrap = styled.div`
    transition: ${themeGet("transition")};
    height: 100%;
    &:hover {
        ${BoxLargeImgMedia} {
            transform: translateY(-5px);
        }
        ${BoxLargeImgLink} {
            visibility: visible;
            opacity: 1;
        }
    }
`;
