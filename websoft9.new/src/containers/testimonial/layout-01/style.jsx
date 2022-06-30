import styled, { device, themeGet } from "@styled";

export const TestimonialWrappper = styled.section`
    background-color: ${themeGet("colors.spring")};
    padding-block: 60px;
    padding-inline: 15px;
    ${device.medium} {
        padding-block: 80px;
        padding-inline: 25px;
    }
    ${device.large} {
        padding-block: 120px;
        padding-inline: 65px;
    }
`;
