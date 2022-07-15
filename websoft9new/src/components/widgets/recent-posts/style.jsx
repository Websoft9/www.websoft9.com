import React from "react";
import styled, { themeGet, space } from "@styled";
import Anchor from "@ui/anchor";

export const ListItem = styled.li`
    line-height: 1;
    overflow: hidden;
    &:not(:last-child) {
        padding-block-end: 15px;
        margin-block-end: 22px;
        border-block-end: 1px solid ${themeGet("colors.border")};
    }
`;

export const ListLink = styled(Anchor)`
    position: relative;
    font-weight: 600;
    font-size: 18px;
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
