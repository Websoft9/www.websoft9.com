import styled, { device, themeGet } from "@styled";
import Anchor from "@ui/anchor";

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
`;

export const StyledAnchor = styled(Anchor)`
    padding-block: 40px;
`

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

export const StyledBG = styled.div`
    position: absolute;
    right: -68px;
    top: 0;
    z-index: -1;
`;

export const HeroTextBox = styled.div`
    max-width: 605px;
    width: 100%;
    padding-left:0px;
    padding-inline-start: 0;
    margin-block-start: 50px;
    margin-block-end: 20px;
    margin-inline: auto;
    text-align: center;
    font-size:18px;
    // color:#FFFFFF;
    ${device.medium} {
        padding-inline-start: 30px;
        margin-inline-start: auto;
        margin-inline-end: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        text-align: left;
    }
`;
export const StyledSubtitle = styled.h6`
    font-weight: 500;
    margin-block-end: 20px;
    // color:#FFFFFF;
    font-size:36px;
`;

export const ImageBoxTwo = styled.div`
    position: relative;
    z-index: 1;
    &>img {
        width:180px;
        height:180px;
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