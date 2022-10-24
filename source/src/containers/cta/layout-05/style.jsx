import styled, { device, themeGet } from "@styled";

export const StyledSection = styled.section`
    // background-color: #454545;
    //background-color: #f4efe9;
    padding-block: 40px;
    position: relative;
    isolation: isolate;
    overflow: hidden;
    // ${device.medium} {
    //     padding-block: 60px;
    // }
    // ${device.large} {
    //     padding-block: 80px;
    // }

    #row-author{
        img {
            width:64px;
            height:64px;
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
        height:280px;
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
    h1 {font-size:34px};
    h2 {font-size:24px};
    h3 {font-size:18px};
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
`