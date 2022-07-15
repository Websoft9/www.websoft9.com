import styled, { device, themeGet } from "@styled";
import Anchor from "@ui/anchor";

export const BlogWrapper = styled.section`
    padding-block-start: 60px;
    padding-block-end: 60px;
    ${device.medium} {
        padding-block-start: 80px;
        padding-block-end: 80px;
    }
    ${device.large} {
        padding-block-start: 100px;
        padding-block-end: 100px;
    }
`;

export const ListItem = styled.li`
    line-height: 1;
    overflow: hidden;
    &:not(:last-child) {
        margin-block-end: 22px;
    }
`;

export const ListLink = styled(Anchor)`
    position: relative;
    font-weight: 600;
    font-size: 15px;
    color: ${themeGet("colors.text")};
    padding-inline-start: 25px;
    line-height: 1.6;
    .icon {
        font-size: 18px;
        margin-block-start: 5px;
        position: absolute;
        left: 0;
        transition: ${themeGet("transition")};
        &-1 {
            transform: translateX(-100%);
            visibility: hidden;
            opacity: 0;
        }
    }
    &:hover {
        .icon {
            &-1 {
                transform: translateX(0);
                visibility: visible;
                opacity: 1;
            }
            &-2 {
                visibility: hidden;
                opacity: 0;
                transform: translateX(100%);
            }
        }
    }
`;
