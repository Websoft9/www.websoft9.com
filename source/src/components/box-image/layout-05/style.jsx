import styled, { space, device, themeGet } from "@styled";
import { Link } from "gatsby";

export const BoxImgInner = styled.div`
    box-shadow: ${themeGet("shadows.default")};
    background: #fff;
    border-radius: ${themeGet("radii.md")};

    padding: 30px;
    min-height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${device.medium} {
        padding-block: 30px;
        padding-inline: 38px;
    }
`;

export const BoxImgMedia = styled.div`
    flex-shrink: 0;
    margin-inline-end: 30px;
`;

export const BoxImgContent = styled.div``;

export const HeadingWrap = styled.h6`
    font-weight: 500;
    line-height: 1.67;
    margin-block-end: 0;
`;

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
    ${space};
    position: relative;
    &:hover {
        ${BoxImgLink} {
            opacity: 1;
            visibility: visible;
        }
    }
`;
