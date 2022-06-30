import styled, { themeGet } from "@styled";
import { Link } from "gatsby";

export const BoxImgInner = styled.div`
    box-shadow: 0 0 30px rgba(51, 51, 51, 0.05);
    background: #fff;
    padding-block-start: 25px;
    padding-block-end: 34px;
    padding-inline: 30px;
    height: 100%;
    transition: ${themeGet("transition")};
`;

export const BoxImgMediaWrap = styled.div`
    margin-block-end: 9px;
`;

export const BoxImgContent = styled.div``;

export const HeadingWrap = styled.h5`
    font-weight: 500;
    line-height: 1.67;
    margin-block-end: 0;
`;

export const TextWrap = styled.p``;

export const BoxImgLink = styled(Link)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    text-indent: -999999px;
`;

export const BoxImgWrapper = styled.div`
    position: relative;
    height: 100%;
    &:hover {
        ${BoxImgLink} {
            opacity: 1;
            visibility: visible;
        }
        ${BoxImgInner} {
            transform: translateY(-5px);
        }
    }
`;
