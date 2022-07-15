import styled, { device, themeGet } from "@styled";

export const BoxImageInner = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    ${device.small} {
        flex-direction: row;
    }
`;

export const BoxImageSrcWrap = styled.div`
    flex-shrink: 0;
    margin-block-end: 24px;
    ${device.small} {
        margin-inline-end: 24px;
        margin-block-end: 0;
    }
`;

export const BoxImageContent = styled.div`
    flex-grow: 1;
`;

export const Image = styled.div``;

export const Heading = styled.h6`
    font-weight: 500;
    line-height: 1.25;
    margin-block-end: 12px;
`;

export const Text = styled.div`
    color: ${themeGet("colors.text")};
`;

export const BoxImageWrap = styled.div`
    transition: ${themeGet("transition")};
    ${BoxImageInner} {
        margin-block-start: ${(props) => props.mt};
    }
`;
