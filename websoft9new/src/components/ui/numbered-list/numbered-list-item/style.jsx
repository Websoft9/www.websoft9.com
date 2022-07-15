import styled, { themeGet, device } from "@styled";
import Anchor from "@ui/anchor";

export const ItemAnchor = styled(Anchor)`
    display: flex;
`;

export const TitleWrap = styled.div`
    overflow: hidden;
    margin-block-start: 14px;
    padding-block-start: 20px;
    border-top: 2px solid ${themeGet("colors.border")};
    flex-grow: 1;
`;

export const TitleInner = styled.div`
    position: relative;
`;

export const Title = styled.h6`
    font-size: 20px;
    line-height: 1.2;
    transition: ${themeGet("transition")};
    padding-inline-end: 15px;
    ${device.medium} {
        font-size: 24px;
    }
`;

export const IconWrap = styled.div`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    height: 30px;
    .icon {
        font-size: 30px;
        transition: ${themeGet("transition")};
        color: ${themeGet("colors.heading")};
        &-1 {
            opacity: 0;
            visibility: hidden;
        }
    }
`;
export const ItemWrap = styled.li`
    position: relative;
    padding: 0;
    margin-block-end: 45px;
    padding-inline-start: 55px;
    ${device.medium} {
        margin-block-end: 62px;
    }
    &:last-child {
        margin-block-end: 0;
        padding-block-end: 0;
    }
    &:before {
        position: absolute;
        left: 0;
        counter-increment: inc-number;
        content: counter(inc-number, decimal-leading-zero);
        font-weight: 800;
        line-height: 1.2;
        color: ${themeGet("colors.silver")};
        font-size: 20px;
        ${device.medium} {
            font-size: 24px;
        }
    }
    &:hover {
        &:before {
            color: ${themeGet("colors.primary")};
        }
        ${Title},
        ${IconWrap} {
            .icon {
                &-1 {
                    opacity: 1;
                    visibility: visible;
                    transform: translateX(30px);
                    color: ${themeGet("colors.primary")};
                }
                &-2 {
                    opacity: 0;
                    visibility: hidden;
                }
            }
        }
    }
`;
