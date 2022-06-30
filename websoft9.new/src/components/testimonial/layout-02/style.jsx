import styled, { themeGet, device } from "@styled";

export const TestimonialWrap = styled.div`
    position: relative;
    background: #fff;
    border-radius: ${themeGet("radii.md")};
    padding-block: 31px;
    padding-inline: 20px;
    box-shadow: ${themeGet("shadows.sm")};
    transition: ${themeGet("transition")};
    ${device.xlarge} {
        padding-block-start: 31px;
        padding-block-end: 47px;
        padding-inline: 50px;
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

export const Review = styled.div`
    font-size: 18px;
`;
