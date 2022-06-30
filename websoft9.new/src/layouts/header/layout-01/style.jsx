import styled, { css, themeGet, space, layout, border, device } from "@styled";
import { allowedTags } from "@utils";
import { fadeInDown } from "@assets/css/animations";

export const HeaderWrap = styled.header`
    border-color: #e4e8f6;
    position: relative;
    z-index: 999;
    box-shadow: 0 10px 15px rgb(0 0 0 / 5%);
`;

export const HeaderTop = styled.div`
    padding-inline: 15px;
    ${(props) =>
        props.borderBottom &&
        css`
            border-bottom: 1px solid ${themeGet("colors.border")};
        `}
`;

export const StyledTopText = styled.p`
    font-size: 14px;
    text-align: center;
    line-height: 1.78;
    padding-block-start: 10px;
    padding-block-end: 10px;
    span {
        font-weight: 500;
        color: ${themeGet("colors.primary")};
    }
`;

export const HeaderBottom = styled.div`
    position: relative;
    transition: ${themeGet("transition")};
    padding: 0 15px;
    ${(props) =>
        props.isSticky &&
        css`
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            z-index: 999;
            background: #fff;
            z-index: 1;
            box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
            animation: 0.95s ease-in-out 0s normal none 1 running ${fadeInDown};
            transition: ${themeGet("transition")};
        `}
`;

export const HeaderMain = styled.div`
    display: flex;
    position: relative;
`;

export const HeaderLeft = styled.div`
    flex-basis: 50%;
    justify-content: center;
    padding: 14px 0;
    ${device.medium} {
        flex-basis: 40%;
    }
    ${device.xlarge} {
        flex-basis: 15%;
    }
    ${device.xxlarge} {
        flex-basis: 23%;
    }
    ${device.xxxlarge} {
        flex-basis: 25%;
    }
`;

export const HeaderMiddle = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const HeaderRight = styled.div`
    flex-shrink: 0;
    flex-basis: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${device.medium} {
        flex-basis: 60%;
    }
    ${device.xlarge} {
        flex-basis: 29%;
    }
    ${device.xxlarge} {
        flex-basis: 26%;
    }
    ${device.xxxlarge} {
        flex-basis: 25%;
    }
`;

export const HeaderNavigation = styled.div`
    display: none;
    ${device.xlarge} {
        display: block;
    }
`;
export const HeaderRightInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    @media only screen and (max-width: 767px) {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        margin: auto;
        width: 100%;
        padding: 20px;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.09);
        background-color: #ffffff;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        visibility: hidden;
        opacity: 0;
        transform: translateY(30px);
        z-index: 9;
        height: auto;
        flex-direction: column;
        ${(props) =>
            props.isOpen &&
            css`
                visibility: visible;
                opacity: 1;
                transform: translateY(0);
            `}
    }
`;

export const HeaderElement = styled("div").withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        ![...allowedTags].includes(prop) && defaultValidatorFn(prop),
})`
    height: 100%;
    display: flex;
    align-items: center;
    ${space};
    ${layout};
    ${border};
`;

// export const FixedHeaderHeight = styled.div`
//     height: ${(props) => props.height}px;
// `;
