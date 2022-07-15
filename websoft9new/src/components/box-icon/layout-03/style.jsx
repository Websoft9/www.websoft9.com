import styled, { device, themeGet } from "@styled";

export const BoxIconInner = styled.div`
    padding: 20px;
    border-radius: ${themeGet("radii.md")};
    transition: all 0.3s ease-in-out;
    ${device.large} {
        padding: 30px;
    }
`;

export const BoxIconTop = styled.div`
    display: flex;
    align-items: center;
    margin-block-end: 10px;
`;

export const IconWrap = styled.div`
    flex-shrink: 0;
    font-size: 48px;
    min-width: 60px;
    margin-inline-end: 10px;
    color: ${themeGet("colors.secondary")};
    height: 60px;
    display: inherit;
`;

export const Heading = styled.h5`
    color: ${themeGet("colors.primary")};
`;

export const BoxIconBottom = styled.div``;

export const Text = styled.p``;

export const BoxIconWrap = styled.div`
    &:hover {
        ${BoxIconInner} {
            transform: translateY(-5px);
            background: #fff;
            box-shadow: ${themeGet("shadows.default")};
        }
    }
`;
