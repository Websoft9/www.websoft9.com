import styled, { themeGet, space, border, color } from "@styled";

export const TestimonialWrap = styled.div`
    background: #fff;
    border-radius: ${themeGet("radii.md")};
    transition: ${themeGet("transition")};
    padding-block-start: 51px;
    padding-block-end: 40px;
    padding-inline: 37px;
    ${color};
    ${space};
    ${border};
`;

export const TestimonialSubject = styled.h6`
    margin-block-end: 15px;
`;

export const TestimonialReview = styled.div`
    font-size: 18px;
    color: #002fa6;
`;

export const AuthorInfoWrap = styled.div`
    display: flex;
    align-items: center;
    margin-block-start: 20px;
`;

export const AuthorMedia = styled.div`
    flex-shrink: 0;
    margin-inline-end: 30px;
    img {
        border-radius: ${themeGet("radii.round")};
    }
`;

export const AuthorInfo = styled.div`
    flex-grow: 1;
`;

export const AuthorName = styled.h6``;

export const AuthorRole = styled.span`
    display: block;
    font-size: 14px;
    &:before {
        content: " / ";
        padding: 0 5px;
    }
`;
