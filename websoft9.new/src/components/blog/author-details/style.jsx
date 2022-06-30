import styled, { device, themeGet } from "@styled";

export const StyledAuthor = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const StyledAvatar = styled.figure`
    max-width: 170px;
    flex-basis: 170px;
    text-align: center;
    margin-block-end: 20px;
    .gatsby-image-wrapper {
        border-radius: ${themeGet("radii.round")};
        margin-block-end: 22px !important;
    }
`;

export const StyledInfo = styled.div`
    max-width: 100%;
    flex-basis: 100%;

    ${device.small} {
        max-width: calc(100% - 170px);
        flex-basis: calc(100% - 170px);
    }
`;

export const StyledBio = styled.p`
    margin-block-start: 15px;
    font-size: 15px;
    color: ${themeGet("colors.heading")};
`;
