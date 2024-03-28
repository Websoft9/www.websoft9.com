import styled, { css, device, themeGet } from "@styled";

export const StyledSection = styled.section`
    // background-color: #454545;
    //background-color: #f4efe9;
    padding-block: 40px;
    position: relative;
    isolation: isolate;
    overflow: hidden;
    @media screen and (max-width:768px) {
        #markdowndir{
            display : none;
        }
    }
    // ${device.large} {
    //     padding-block: 80px;
    // }

    #row-author{
        img {
            width:64px;
            height:64px;
        }
    }

    #markdowndir{
        div {
            border:none;
            box-shadow:0 0 ;
        }
    }

`;

export const StyledHeading = styled.h3`
    margin-block-end: 10px;
    // color: #fff;
    // span {
    //     color: ${themeGet("colors.secondary")};
    // }
    ${device.large} {
        margin-block-end: 0;
    }
`;

export const HeroTextBox = styled.div`
    //max-width: 605px;
    width: 100%;
    padding-left:0px;
    padding-inline-start: 0;
    // margin-block-start: 50px;
    // margin-block-end: 20px;
    margin-inline: auto;
    // text-align: center;
    font-size:18px;
    // color:#FFFFFF;
    // ${device.medium} {
    //     padding-inline-start: 30px;
    //     margin-inline-start: auto;
    //     margin-inline-end: 0;
    //     margin-block-start: 0;
    //     margin-block-end: 0;
    //     text-align: left;
    // }
`;
export const StyledSubtitle = styled.h6`
    font-weight: 500;
    margin-block-end: 20px;
    // color:#FFFFFF;
    font-size:30px;
    padding-left:15px;
`;

export const ImageBoxTwo = styled.div`
    position: relative;
    z-index: 1;
`;

export const ImageBoxOne = styled.div`
    position: relative;
    z-index: 1;
    img{
        width:360px;
        height:270px;
        object-fit:cover
    }
`;

export const TestimonialRating = styled.div`
    margin-block-end: 10px;
    text-align: start;
    .rating {
        font-size: 16px;
        color: ${themeGet("colors.yellow")};
        &.disable {
            color: ${themeGet("colors.silver")};
        }
    }
`;

export const TestimonialInfo = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    margin-block-end: 22px;
    ${device.small} {
        justify-content: flex-start;
    }
`;

export const TestimonialMedia = styled.div`
    flex-shrink: 0;
    margin-block-end: 20px;
    img {
        border-radius: ${themeGet("radii.round")};
    }
    ${device.small} {
        margin-inline-end: 30px;
        margin-block-end: 0;
    }
`;

export const TestimonialAuthor = styled.div`
    max-width:290px;
    flex-grow: 1;
    text-align: center;
    @media ${device.small} {
        text-align: left;
    }
`;

export const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    ${device.small} {
        text-align: left;
        justify-content: flex-start;
    }
`;


export const AuthorName = styled.h6``;

export const AuthorRole = styled.span`
    font-size: 14px;
    &:before {
        content: " / ";
        padding: 0 5px;
    }
`;

export const NavContainer = styled.div`
    //position:fixed;
    z-index:999;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #eee;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
    transform: translate(0, 0);
    transition: transform 500ms ease;
    font-size:15px;

    // .markdown-navigation .title-level3 {
    //     display:none;
    // }
    // .markdown-navigation .title-level4 {
    //     display:none;
    // }
    // .markdown-navigation .title-level5 {
    //     display:none;
    // }
    // .markdown-navigation .title-level6 {
    //     display:none;
    // }
`

export const MarkdownStyle = styled.div`
    h1 {font-size:34px;padding-bottom:20px;padding-top:20px};
    h2 {font-size:24px;padding-bottom:20px;padding-top:20px};
    h3 {font-size:18px;padding-bottom:20px;padding-top:20px};
    h4 {font-size:15px;padding-bottom:20px;padding-top:20px};
    ul {
        list-style-type:disc;
        list-style-position:inside;
    }
    table{
        border:solid #000 1px; 
        td {
            border:solid #000 1px;
        }
    }
    a {
        color: dodgerblue; /* 设置链接的默认颜色为蓝色 */
        text-decoration: none; /* 去掉下划线 */
    }
`

export const FloatingSocialBox = styled.div`
    position: absolute;
    bottom: 100%;
    right: 0%;
    transform: translate(0%, -1px);
    width: auto;
    white-space: nowrap;
    padding-inline: 4px;
    text-align: center;
    background: #fff;
    border-radius: ${themeGet("radii.md")};
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
    user-select: none;
    filter: drop-shadow(0 2px 20px rgba(0, 0, 0, 0.06));
    z-index: 999;
    padding-block: 10px;
    padding-inline: 15px;
    visibility: hidden;
    opacity: 0;
    transition: ${themeGet("transition")};
    ${(props) =>
        props.isOpen &&
        css`
            transform: translate(0%, -12px);
            visibility: visible;
            opacity: 1;
        `}
    @media ${device.small} {
        right: 10%;
    }
    &:before {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(100%);
        content: "";
        border-block-start: 8px solid #fff;
        border-inline-start: 9px solid transparent;
        border-inline-end: 9px solid transparent;
    }
`;
