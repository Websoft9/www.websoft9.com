import styled, { device } from "@styled";

export const SectionWrap = styled.section`
    padding-block-start: 60px;
    //padding-block-end: 60px;
    ${device.medium} {
        padding-block-start: 80px;
       // padding-block-end: 80px;
    }
    ${device.large} {
        padding-block-start: 100px;
        //padding-block-end: 100px;
    }
    .box-item {
        margin-block-end: 40px;
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
    a{
        color: #0d6efd;
        text-decoration: none;
    }
`;