import styled, { device, themeGet } from "@styled";

export const BoxImgInner = styled.div`
    border-radius: 4px;
    transition: ${themeGet("transition")};
    padding-block-start: 20px;
    padding-block-end: 26px;
    padding-inline: 30px;
    ${device.large} {
        padding-block-start: 30px;
        padding-block-end: 31px;
        padding-inline: 35px;
    }
    background-color:#f2f2f2;
    img{
        height:80px;
    }
`;

export const BoxImgMediaWrap = styled.figure`
    text-align: center;
    margin-block-end: 24px;
    position: relative;
    z-index: 2;
    .gatsby-image-wrapper {
        margin-inline: auto;
    }
`;

export const BoxImgContent = styled.div`
    text-align: center;
`;

export const HeadingWrap = styled.h6`
    font-weight: 500;
    line-height: 1.25;
    margin-block-end: 12px;
`;

export const TextWrap = styled.p`
    color: ${themeGet("colors.text")};
    height:50px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word; /*允许在单词内换行,防止有字母时候出问题*/
    display: -webkit-box; /*将对象作为弹性伸缩盒子模型显示*/
    -webkit-line-clamp: 2; /*多行在这里修改数字即可*/
    -webkit-box-orient: vertical; /*从上到下垂直排列子元素*/
`;

export const BoxImgWrapper = styled.div`
    padding-block-end: 26px;
    &:hover {
        ${BoxImgInner} {
            transform: translateY(-5px);
            background: #fff;
            box-shadow: ${themeGet("shadows.md")};
            
        }
    }
`;

