import styled, { device } from "@styled";

export const StyledSection = styled.section`
    padding-block-end: 60px;
    position: relative;
    .testimonial-shape {
        position: absolute;
        left: 144px;
        bottom: 340px;
        max-width: 211px;
    }
    ${device.medium} {
        padding-block-end: 80px;
        .testimonial-shape {
            left: 44px;
            bottom: 40px;
        }
    }
    ${device.large} {
        padding-block-end: 120px;
    }
`;

export const StyledTestimonial = styled.div`
    max-width: 570px;
    margin-block-start: 30px;
    position: relative;
    z-index: 1;
    ${device.medium} {
        margin-block-start: 0;
    }
`;

export const StyledReview = styled.p`
    font-size: 24px;
    line-height: 1.34;
    font-weight: 500;
    color: #000000;
    margin-block-end: 40px;
    ${device.medium} {
        font-size: 20px;
        margin-block-end: 30px;
    }
    ${device.medium} {
        font-size: 26px;
        margin-block-end: 40px;
    }
    ${device.xlarge} {
        font-size: 34px;
        margin-block-end: 80px;
    }
`;

export const StyledAuthorName = styled.h6`
    text-transform: uppercase;
`;
