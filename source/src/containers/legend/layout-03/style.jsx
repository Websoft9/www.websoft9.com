import styled, { device,css, themeGet, space} from "@styled";

export const SectionWrap = styled.section`
    padding-block-start: 44px;
    padding-block-end: 25px;
    font-Size:18px;
    // ${device.medium} {
    //     padding-block-start: 62px;
    //     padding-block-end: 43px;
    // }
    // ${device.large} {
    //     padding-block-start: 91px;
    //     padding-block-end: 72px;
    // }
    & > div> div >div > ul {       
        list-style-type:disc;
        list-style-position:inside;
    }
`;


