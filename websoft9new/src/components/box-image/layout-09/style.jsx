import styled, { device, themeGet } from "@styled";
import Anchor from "@ui/anchor";

export const StyledInner = styled.div`
    text-align: center;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
        box-shadow 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
        -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    padding: 30px 35px 31px;
    border-radius: 5px;
`;

export const StyledImage = styled.div`
    margin-bottom: 41px;
`;

export const StyledTitle = styled.h6`
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 12px;
`;

export const StyledMoreLink = styled(Anchor)`
    margin-top: 15px;
    font-weight: 500;
    color: #086ad8;
    opacity: 0;
    visibility: hidden;
`;

export const StyledWrap = styled.div`
    position: relative;
    padding: 0;
    position: relative;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
        box-shadow 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
        -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:before {
        position: absolute;
        content: "";
        right: 0;
        top: 0;
        bottom: 0;
        width: 1px;
        background-image: linear-gradient(
            to bottom,
            #ccc 58.33333%,
            rgba(0, 0, 0, 0) 0%
        );
        background-position: left top;
        background-size: 100% 8px;
        background-repeat: repeat-y;
        transition: visibility 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &:after {
        position: absolute;
        content: "";
        right: 0;
        left: 0;
        top: 0;
        height: 1px;
        background-image: linear-gradient(
            to right,
            #ccc 58.33333%,
            rgba(0, 0, 0, 0) 0%
        );
        background-position: left bottom;
        background-size: 8px 100%;
        background-repeat: repeat-x;
        transition: visibility 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &:hover {
        ${StyledInner} {
            background: #fff;
            transform: scale(1.03);
            box-shadow: 0 18px 40px rgba(51, 51, 51, 0.1);
            z-index: 9;
            position: relative;
            transition: all 0.3s ease-in-out;
        }
        ${StyledMoreLink} {
            opacity: 1;
            visibility: visible;
        }
    }
`;
