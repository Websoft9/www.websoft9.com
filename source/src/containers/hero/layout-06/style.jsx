import styled, { device, themeGet } from "@styled";

export const HeroWrapper = styled.section`
    //background-color: #f4efe9;
    //padding-block-start:100px;
    //padding-block-end:90px;
    & > div {
        padding-left:0px;
        padding-right:0px;
    }
`;

export const HeroTextBox = styled.div`
    max-width: 605px;
    //width: 100%;
    padding-inline-start: 0;
    margin-block-start: 50px;
    margin-block-end: 20px;
    margin-inline: auto;
    text-align: center;

    ${device.medium} {
        //padding-inline-start: 30px;
        margin-inline-start: auto;
        margin-inline-end: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        text-align: left;
    }
`;

export const ImageBoxWrap = styled.div`
    position: relative;
    margin-inline: auto;
    max-width: 605px;
    text-align: center;

    ${device.medium} {
        padding-block-start: 160px;
        //max-width: 100%;
        margin-inline: 0;
        text-align: left;
    }
    ${device.large} {
        margin-block-start: 20px;
        padding-block-start: 0;
    }
`;

export const ImageBoxTwo = styled.div`
    position: relative;
    z-index: 1;
`;

export const StyledSubtitle = styled.h6`
    // font-weight: 500;
    // color: ${themeGet("colors.primary")};
    margin-block-end: 20px;
`;

export const StyledTitle = styled.h1`
    font-weight: 500;
    margin-block-end: 15px;
`;

export const ReadMoreBtn = styled.div`
    margin-block-start: 13px;
    .mt-btn {
        border-bottom: 1px solid ${themeGet("colors.border")};
    }
`;

export const MarkdownStyle = styled.div`
    h1 {font-size:34px};
    h2 {font-size:24px};
    h3 {font-size:18px};
    h4 {font-size:15px};
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
`;