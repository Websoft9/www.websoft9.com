import styled, { themeGet, device } from "@styled";

export const StyledSection = styled.section`
    //padding-block: 40px;
    position: relative;
    isolation: isolate;
    overflow: hidden;
    // ${device.medium} {
    //     padding-block: 60px;
    // }
    // ${device.large} {
    //     padding-block: 80px;
    // }
    & >div > div {
        margin-block-start:30px
    }

    div ul {
        list-style-type:disc;
        list-style-position:inside;
    }
`;


export const StyledContent = styled.div`
    // background-color: #f4efe9;
    max-width: 1200px;
    width: 100%;
    padding-inline-start: 30px;
    margin-block-start: 50px;
    margin-block-end: 20px;
    margin-inline: auto;
`
