import styled, { space, themeGet } from "@styled";

export const BoxIconInner = styled.div`
    padding-block-start: 36px;
    padding-block-end: 26px;
    padding-inline: 10px;
    border-radius: ${themeGet("radii.md")};
    background: #fff;
    border: 2px solid ${themeGet("colors.gray.400")};
    transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
    text-align: center;
    ${space};
`;

export const BoxIconImg = styled.div`
    height: 65px;
    text-align: center;
    width: 65px;
    margin-inline: auto;
    margin-block-end: 29px;
    color: ${themeGet("colors.primary")};
    svg * {
        stroke: ${themeGet("colors.primary")};
    }
    i {
        color: ${themeGet("colors.primary")};
    }
`;

export const BoxIconContent = styled.div`
    text-align: center;
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
