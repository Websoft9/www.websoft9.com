import styled, { themeGet, device } from "@styled";

export const BoxIconInner = styled.div`
    border-radius: ${themeGet("radii.md")};
    transition: ${themeGet("transition")};
    text-align: center;
    display: flex;
    padding-block-start: 25px;
    padding-block-end: 15px;
    padding-inline: 15px;

    ${device.medium} {
        padding-block: 30px;
        padding-inline: 15px;
    }
`;

export const BoxIconImg = styled.div`
    max-width: 80px;
    flex-basis: 80px;
    margin-inline-end: 10px;
    color: ${themeGet("colors.heading")};
`;

export const BoxIconContent = styled.div`
    text-align: start;
    max-width: calc(100% - 90px);
    flex-basis: calc(100% - 90px);
`;

export const BoxIcontitle = styled.h5`
    font-weight: 500;
    line-height: 1.25;
    margin-block-end: 12px;
`;

export const BoxIconText = styled.p`
    margin-block-end: 0;
`;

export const BoxIconBtn = styled.div`
    margin-block-start: 20px;
`;

export const BoxIconWrap = styled.div`
    &:hover {
        ${BoxIconInner} {
            border-color: #fff;
            transform: translateY(-5px);
            background: #fff;
            box-shadow: ${themeGet("shadows.default")};
        }
    }
`;
