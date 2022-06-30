import styled, { themeGet, device } from "@styled";

export const SectionWrap = styled.section`
    position: relative;
    isolation: isolate;
    padding-block: 60px;
    background-color: rgb(0, 47, 166);
    ${device.medium} {
        padding-block: 80px;
    }
    ${device.large} {
        padding-block: 100px;
    }
`;

export const StyledBG = styled.div`
    position: absolute;
    inset: 0 auto 0 0;
    z-index: -1;
`;

export const ContactInfoBox = styled.div`
    margin-block-end: 45px;
    ${device.large} {
        margin-block-end: 0;
    }
`;

export const ContactFormBox = styled.div`
    background: #fff;
    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);
    border-radius: ${themeGet("radii.md")};
    text-align: center;
    padding-inline: 20px;
    padding-block-start: 32px;
    padding-block-end: 40px;

    ${device.medium} {
        padding-inline: 50px;
        padding-block-start: 42px;
        padding-block-end: 50px;
    }
`;

export const ContactFormTitle = styled.div`
    margin-block-end: 40px;
`;
